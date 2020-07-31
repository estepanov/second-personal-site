interface ContributionCount {
  contributionCount: number
}

interface ContributionDays {
  contributionDays: ContributionCount[]
  firstDay: string
}

export interface ContributionCalendarWeeks {
  weeks: ContributionDays[]
}
