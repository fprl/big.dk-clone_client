import styled from 'styled-components'

const ProjectItem = ({ project }) => {
  return (
    <Item>
      {project.title}
    </Item>
  )
}

export default ProjectItem

const Item = styled.article`
  background-image: ''
`
