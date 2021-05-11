import styled from 'styled-components'

const ProjectsOrderer = ({ setGroupProjectsBy }) => {
  return (
    <Container>
      <Button onClick={() => setGroupProjectsBy('year')}>Chronological</Button>
      <Button onClick={() => setGroupProjectsBy('size')}>Scale</Button>
    </Container>
  )
}

export default ProjectsOrderer

const Container = styled.aside`
  display: flex;

  margin-left: 1rem;
`
const Button = styled.button``
