export interface ContributionCount {
  date: string
  contributionCount: number
}

interface ContributionDays {
  contributionDays: ContributionCount[]
  firstDay: string
}

export interface ContributionCalendarWeeks {
  weeks: ContributionDays[]
}
