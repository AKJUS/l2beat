import { getDefaultMetadata } from '~/utils/metadata'

import { MainPageHeader } from '~/components/main-page-header'
import { TableFilterContextProvider } from '~/components/table/filters/table-filter-context'
import { getScalingRiskEntries } from '~/server/features/scaling/risks/get-scaling-risk-entries'
import { ScalingRiskTables } from './_components/scaling-risk-tables'

export const metadata = getDefaultMetadata({
  openGraph: {
    url: '/scaling/risk',
  },
})

export default async function Page() {
  const entries = await getScalingRiskEntries()

  return (
    <>
      <MainPageHeader>Risk Analysis</MainPageHeader>
      <TableFilterContextProvider>
        <ScalingRiskTables {...entries} />
      </TableFilterContextProvider>
    </>
  )
}
