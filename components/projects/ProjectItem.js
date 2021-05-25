import Link from 'next/link'
import styled from 'styled-components'
import { Tooltip } from 'react-tippy'

import Icon from './Icon'

const ProjectItem = ({ project }) => {
  const LOCAL_ICON = process.env.NEXT_PUBLIC_CMS_LOCALHOST + project.icon.url
  const LOCAL_COVER = process.env.NEXT_PUBLIC_CMS_LOCALHOST + project.cover.formats.small.url

  return (
    <Tooltip title={`${project.shortTitle} - ${project.title}`} position="top" size="small" followCursor="true" offset={90} distance={-50}>
      <Project id={project.id} data-flip-id={project.shortTitle}>
        <Link href={`/projects/${project.slug}`}>
          <Animation>
            <Icon
              src={process.env.NODE_ENV === 'development' ? LOCAL_ICON : project.icon.url}
              width={project.icon.width / 2.2}
              height={project.icon.height / 2.2}
              srcOnHover={process.env.NODE_ENV === 'development' ? LOCAL_COVER : project.cover.formats.small.url}
            />
          </Animation>
        </Link>
        <Title>{project.shortTitle}</Title>
      </Project>
    </ Tooltip>
  )
}

export default ProjectItem

const Project = styled.li`
  cursor: pointer;
`

const Animation = styled.div`
  transition: transform .2s;

  :hover {
    transform: scale(2);
  }
`

const Title = styled.h6`
  font-size: 0.6rem;
  margin: 0;
  font-weight: 600;
`
