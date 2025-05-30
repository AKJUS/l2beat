import type { Milestone } from '@l2beat/config'
import { useMemo, useState } from 'react'
import { ChartControlsWrapper } from '~/components/core/chart/chart-controls-wrapper'
import type {
  ProjectToken,
  ProjectTokens,
} from '~/server/features/scaling/tvs/tokens/get-tokens-for-project'
import type { TvsChartRange } from '~/server/features/scaling/tvs/utils/range'
import { api } from '~/trpc/react'
import { ProjectChartTimeRange } from '../../core/chart/chart-time-range'
import { getChartRange } from '../../core/chart/utils/get-chart-range-from-columns'
import { TokenCombobox } from '../../token-combobox'
import type { ChartUnit } from '../types'
import { ProjectTokenChart } from './project-token-chart'
import type { TvsChartDataPoint } from './tvs-chart'
import { TvsChart } from './tvs-chart'
import { TvsChartTimeRangeControls } from './tvs-chart-time-range-controls'
import { TvsChartUnitControls } from './tvs-chart-unit-controls'

interface Props {
  projectId: string
  milestones: Milestone[]
  tokens: ProjectTokens | undefined
}

export function ProjectTvsChart({ projectId, milestones, tokens }: Props) {
  const [token, setToken] = useState<ProjectToken>()
  const [unit, setUnit] = useState<ChartUnit>('usd')

  const [timeRange, setTimeRange] = useState<TvsChartRange>('1y')

  if (tokens && token) {
    return (
      <ProjectTokenChart
        isBridge={true}
        tokens={tokens}
        setToken={setToken}
        token={token}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        unit={unit}
        setUnit={setUnit}
        milestones={milestones}
        projectId={projectId}
      />
    )
  }

  return (
    <DefaultChart
      projectId={projectId}
      milestones={milestones}
      timeRange={timeRange}
      setTimeRange={setTimeRange}
      tokens={tokens}
      token={token}
      setToken={setToken}
      unit={unit}
      setUnit={setUnit}
    />
  )
}

interface DefaultChartProps {
  projectId: string
  milestones: Milestone[]
  timeRange: TvsChartRange
  setTimeRange: (timeRange: TvsChartRange) => void
  tokens: ProjectTokens | undefined
  token: ProjectToken | undefined
  setToken: (token: ProjectToken | undefined) => void
  unit: ChartUnit
  setUnit: (unit: ChartUnit) => void
}

function DefaultChart({
  projectId,
  milestones,
  timeRange,
  setTimeRange,
  unit,
  setUnit,
  tokens,
  setToken,
  token,
}: DefaultChartProps) {
  const { data, isLoading } = api.tvs.chart.useQuery({
    range: timeRange,
    filter: { type: 'projects', projectIds: [projectId] },
    excludeAssociatedTokens: false,
    previewRecategorisation: false,
  })

  const chartData: TvsChartDataPoint[] | undefined = data?.map(
    ([timestamp, native, canonical, external, ethPrice]) => {
      const total = native + canonical + external
      const divider = unit === 'usd' ? 1 : ethPrice
      return {
        timestamp,
        value: total / divider,
      }
    },
  )
  const chartRange = useMemo(() => getChartRange(chartData), [chartData])

  return (
    <section className="flex flex-col gap-4">
      <ChartControlsWrapper>
        <ProjectChartTimeRange range={chartRange} />
        <TvsChartTimeRangeControls
          projectSection
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />
      </ChartControlsWrapper>
      <TvsChart
        data={chartData}
        unit={unit}
        isLoading={isLoading}
        milestones={milestones}
      />
      <TvsChartUnitControls unit={unit} setUnit={setUnit}>
        {tokens && (
          <TokenCombobox
            tokens={tokens}
            setValue={setToken}
            value={token}
            isBridge={true}
          />
        )}
      </TvsChartUnitControls>
    </section>
  )
}
