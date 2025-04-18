import { notFound } from 'next/navigation'
import { ContentWrapper } from '~/components/content-wrapper'
import { OtherMigrationNotice } from '~/components/countdowns/other-migration/other-migration-notice'
import { WhyAmIHereNotice } from '~/components/countdowns/other-migration/why-am-i-here-notice'
import { StageOneRequirementsChangeNotice } from '~/components/countdowns/stage-one-requirements-change/stage-one-requirements-change-notice'
import { HighlightableLinkContextProvider } from '~/components/link/highlightable/highlightable-link-context'
import { DesktopProjectNavigation } from '~/components/projects/navigation/desktop-project-navigation'
import { MobileProjectNavigation } from '~/components/projects/navigation/mobile-project-navigation'
import { projectDetailsToNavigationSections } from '~/components/projects/navigation/types'
import { ProjectDetails } from '~/components/projects/project-details'
import { featureFlags } from '~/consts/feature-flags'
import { env } from '~/env'
import { getScalingProjectEntry } from '~/server/features/scaling/project/get-scaling-project-entry'
import { ps } from '~/server/projects'
import { HydrateClient } from '~/trpc/server'
import { getProjectMetadata } from '~/utils/metadata'
import { ProjectScalingSummary } from './_components/scaling-project-summary'

export async function generateStaticParams() {
  if (env.VERCEL_ENV !== 'production') return []

  const projects = await ps.getProjects({ where: ['scalingInfo'] })
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata(props: Props) {
  const params = await props.params

  const project = await ps.getProject({
    slug: params.slug,
    select: ['display'],
    where: ['scalingInfo'],
  })
  if (!project) {
    notFound()
  }

  return getProjectMetadata({
    project: {
      name: project.name,
      description: project.display.description,
    },
    metadata: {
      openGraph: {
        url: `/scaling/projects/${project.slug}`,
      },
    },
  })
}

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function Page(props: Props) {
  const params = await props.params
  const project = await ps.getProject({
    slug: params.slug,
    select: [
      'display',
      'statuses',
      'scalingInfo',
      'scalingRisks',
      'scalingStage',
      'scalingTechnology',
      'tvlInfo',
    ],
    optional: [
      'contracts',
      'permissions',
      'chainConfig',
      'scalingDa',
      'customDa',
      'isUpcoming',
      'archivedAt',
      'milestones',
      'trackedTxsConfig',
      'tvsConfig',
    ],
  })
  if (!project) {
    notFound()
  }

  const projectEntry = await getScalingProjectEntry(project)
  const navigationSections = projectDetailsToNavigationSections(
    projectEntry.sections,
  )
  const isNavigationEmpty = navigationSections.length === 0

  // HydrateClient is used to hydrate the client with chart data that is fetched inside get-bridges-project-details.tsx
  return (
    <HydrateClient>
      {!isNavigationEmpty && (
        <div className="sticky top-0 z-100 md:hidden">
          <MobileProjectNavigation sections={navigationSections} />
        </div>
      )}
      <ProjectScalingSummary project={projectEntry} />
      <ContentWrapper mobileFull>
        {isNavigationEmpty ? (
          <ProjectDetails items={projectEntry.sections} />
        ) : (
          <div className="gap-x-12 md:flex">
            <div className="mt-10 hidden w-[242px] shrink-0 md:block">
              <DesktopProjectNavigation
                project={{
                  title: projectEntry.name,
                  slug: projectEntry.slug,
                  isUnderReview: !!projectEntry.underReviewStatus,
                }}
                sections={navigationSections}
              />
            </div>
            <div className="w-full">
              {projectEntry.countdowns.otherMigration &&
                !featureFlags.othersMigrated() && (
                  <OtherMigrationNotice
                    {...projectEntry.countdowns.otherMigration}
                  />
                )}
              {projectEntry.header.category === 'Other' &&
                projectEntry.reasonsForBeingOther &&
                projectEntry.reasonsForBeingOther.length > 0 && (
                  <WhyAmIHereNotice
                    reasons={projectEntry.reasonsForBeingOther}
                  />
                )}
              {projectEntry.stageConfig.stage !== 'NotApplicable' &&
                projectEntry.stageConfig.stage !== 'UnderReview' &&
                projectEntry.stageConfig.downgradePending && (
                  <StageOneRequirementsChangeNotice
                    downgradePending={projectEntry.stageConfig.downgradePending}
                  />
                )}
              <HighlightableLinkContextProvider>
                <ProjectDetails items={projectEntry.sections} />
              </HighlightableLinkContextProvider>
            </div>
          </div>
        )}
      </ContentWrapper>
    </HydrateClient>
  )
}
