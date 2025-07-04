import { orderIndependentDiff } from 'deep-diff'
import type { ContractValueType } from '../config/ColorConfig'
import type { ContractFieldSeverity } from '../config/StructureConfig'
import { normalizeDiffPath } from '../utils/normalizeDiffPath'
import type { EntryParameters } from './types'

export interface FieldDiff {
  key: string
  before?: string
  after?: string
  severity?: ContractFieldSeverity
  description?: string
  type?: ContractValueType[] | ContractValueType
}

export function diffContracts(
  before: EntryParameters,
  after: EntryParameters,
  ignore: string[],
): FieldDiff[] {
  // TODO: why order-independent diff? It ignores the order in the arrays,
  // so changes to things like .via are incorrectly displayed.
  const differences = orderIndependentDiff(before, after)

  if (differences === undefined) {
    return []
  }

  const result: FieldDiff[] = []

  for (const difference of differences) {
    switch (difference.kind) {
      case 'N':
        result.push({
          key: difference.path?.join('.') ?? '',
          after: JSON.stringify(difference.rhs),
        })
        break
      case 'D':
        result.push({
          key: difference.path?.join('.') ?? '',
          before: JSON.stringify(difference.lhs),
        })
        break
      case 'E':
        result.push({
          key: difference.path?.join('.') ?? '',
          before: JSON.stringify(difference.lhs),
          after: JSON.stringify(difference.rhs),
        })
        break
      case 'A':
        {
          const r: FieldDiff = {
            key: `${difference.path?.join('.') ?? ''}.${difference.index}`,
          }
          if (difference.item.kind === 'N') {
            r.after = JSON.stringify(difference.item.rhs)
          }
          if (difference.item.kind === 'D') {
            r.before = JSON.stringify(difference.item.lhs)
          }
          if (difference.item.kind === 'E') {
            r.before = JSON.stringify(difference.item.lhs)
            r.after = JSON.stringify(difference.item.rhs)
          }
          result.push(r)
        }
        break
    }
  }

  const filteredResult = result.filter((r) => {
    return !ignore.some((i) => r.key.startsWith(i))
  })

  return filteredResult.map((entry) => ({
    ...entry,
    severity: after.fieldMeta?.[normalizeDiffPath(entry.key)]?.severity,
    description: after.fieldMeta?.[normalizeDiffPath(entry.key)]?.description,
    type: after.fieldMeta?.[normalizeDiffPath(entry.key)]?.type,
  }))
}
