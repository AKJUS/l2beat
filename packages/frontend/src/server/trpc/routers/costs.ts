import { z } from 'zod'
import {
  CostsChartParams,
  getCostsChart,
} from '~/server/features/scaling/costs/get-costs-chart'
import { getCostsTable } from '~/server/features/scaling/costs/get-costs-table-data'
import {
  ProjectCostsChartParams,
  getProjectCostsChart,
} from '~/server/features/scaling/costs/get-project-costs-chart'
import { CostsTimeRange } from '~/server/features/scaling/costs/utils/range'
import { procedure, router } from '../trpc'

export const costsRouter = router({
  chart: procedure
    .input(CostsChartParams)
    .query(async ({ input }) => getCostsChart(input)),
  projectChart: procedure
    .input(ProjectCostsChartParams)
    .query(async ({ input }) => getProjectCostsChart(input)),
  table: procedure
    .input(
      z.object({
        range: CostsTimeRange,
      }),
    )
    .query(async ({ input }) => getCostsTable(input.range)),
})
