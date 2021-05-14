import styled from 'styled-components'

const ProjectItem = ({ project }) => {
  return (
    <Item id={project.id} data-flip-id={project.shortTitle}>
      {project.title}
    </Item>
  )
}

export default ProjectItem

const Item = styled.article``
