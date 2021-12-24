import { Project } from "../interfaces/Project";

export interface GroupedCompany {
  companyName: string
  experiences: Project[]
  startDate: Date | null
  endDate: Date | null
  tech: string[]
}

const DEFAULT_GROUPED_COMPANY: GroupedCompany = {
  companyName: '',
  experiences: [],
  startDate: null,
  endDate: null,
  tech: []
}

const useGroupedWork = (projects: Project[]) => {
  const results = new Map<string, GroupedCompany>()
  projects.sort((a, b) => {
    const left = new Date(a.frontmatter.startDate === '' ? Infinity : a.frontmatter.startDate)
    const right = new Date(b.frontmatter.startDate || '')
    return right.valueOf() - left.valueOf();
  }).forEach((project) => {
    const companyName = project.frontmatter.companyName as string
    const projectStartDate = project.frontmatter.startDate ? new Date(project.frontmatter.startDate) : null
    const projectEndDate = project.frontmatter.endDate ? new Date(project.frontmatter.endDate) : null
    const result = results.get(companyName) || {...DEFAULT_GROUPED_COMPANY}
    // console.log('result',result)
    result.companyName = project.frontmatter.companyName || ''
    const resultStartDate = result.startDate ? new Date(result.startDate) : null
    // const resultEndDate = result.endDate ? new Date(result.endDate) : null
    if(!resultStartDate || (resultStartDate && projectStartDate && projectStartDate < resultStartDate) ) {
      result.startDate = projectStartDate
    }
    result.endDate = projectEndDate
    result.experiences = [...result.experiences, project]
    result.tech = Array.from(new Set([...result.tech, ...project.frontmatter.tech]))

    results.set(companyName, result)
  })
  return Array.from(results.values()) as GroupedCompany[]
};

export default useGroupedWork
