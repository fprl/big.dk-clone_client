import Link from 'next/link'
import styled from 'styled-components'
import { Tooltip } from 'react-tippy'

import Icon from './Icon'

const LOCAL_URL = process.env.NEXT_PUBLIC_CMS_LOCALHOST

const ProjectItem = ({ project }) => {
  const localIcon = LOCAL_URL + project.icon.url
  const localIconPreview = LOCAL_URL + project.iconPreview.url

  function handleOnMouseOver(e) {
    e.currentTarget.style.zIndex = 1
  }
  
  function handleOnMouseOut(e) {
    e.currentTarget.style.zIndex = 'auto'
  }

  return (
    <Tooltip title={`${project.shortTitle} - ${project.title}`} position="top" size="small" followCursor="true" offset={90} distance={-50}>
      <Project id={project.id} data-flip-id={`PROJECT-${project.shortTitle}`} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
        <Link href={`/projects/${project.slug}`}>
          <Animation>
            <Icon
              src={process.env.NODE_ENV === 'development' ? localIcon : project.icon.url}
              srcOnHover={process.env.NODE_ENV === 'development' ? localIconPreview : project.iconPreview.url}
              width={36}
              height={36}
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
  position: relative;
`

const Animation = styled.div`
  transition: transform .2s;

  width: 36px;
  height: 36px;

  :hover {
    transform: scale(2);
  }
`

const Title = styled.h6`
  font-size: 0.6rem;
  margin: 0;
  font-weight: 600;
`
