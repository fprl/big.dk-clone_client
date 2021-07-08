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
    <Project id={project.id} data-flip-id={`PROJECT-${project.shortTitle}`} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
      <Tooltip title={`${project.shortTitle} - ${project.title}`} position="top" size="small" followCursor="true" offset={90} distance={-50} delay={100}>
        <Link href={`/projects/${project.slug}`}>
          <Divider>
            <Icon
              src={process.env.NODE_ENV === 'development' ? localIcon : project.icon.url}
              srcOnHover={process.env.NODE_ENV === 'development' ? localIconPreview : project.iconPreview.url}
              alt={`${project.shortTitle} - ${project.title}`}
            />
          </Divider>
        </Link>
        <Title>{project.shortTitle}</Title>
      </ Tooltip>
    </Project>
  )
}

export default ProjectItem


const Project = styled.li`
  cursor: pointer;
  position: relative;
`

const Title = styled.h6`
  font-size: 0.9rem;
  margin: 0;
  font-weight: 600;

  @media screen and (min-width: 1024px) {
    font-size: 0.8rem;
  }
`

const Divider = styled.div`
`
