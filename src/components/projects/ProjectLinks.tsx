import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
// import { lighten, darken } from '@theme-ui/color'

interface LinkProps {
  href: string
  name: string
  icon: string
  marginRight?: number
  marginBottom?: number
}
const Link: React.FC<LinkProps> = ({ href, name, icon, marginRight, marginBottom }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        marginRight,
        marginBottom,
        marginTop: marginBottom,
        fontSize: 2,
        fontFamily: 'heading',
        color: 'text',
        textDecoration: 'none',
        '&:hover': {
          // background: t => `linear-gradient(to top left, ${lighten('primary', 0.2)(t)}, ${darken('primary', 0.1)(t)})`,
          textDecoration: 'underline'
        }
      }}
    >
      {name}
    </a>
  )
}
/* {icon && <i sx={{ marginRight: 2 }} className={icon} />} */

interface ProjectLinksProps {
  repo: string
  website: string
  marginRight?: number
  marginBottom?: number
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ repo, website, marginRight, marginBottom }) => {
  return (
    <React.Fragment>
      {repo && <Link href={repo} name="Repository" icon="fab fa-git" marginRight={marginRight} marginBottom={marginBottom} />}
      {website && <Link href={website} name="Website" icon="fad fa-browser" marginRight={marginRight} marginBottom={marginBottom} />}
    </React.Fragment>
  )
}

export default ProjectLinks
