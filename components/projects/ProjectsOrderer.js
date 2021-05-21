import styled from 'styled-components'

const ProjectsOrderer = ({ setGroupProjectsBy }) => {
  return (
    <Container>
      <Button onClick={() => setGroupProjectsBy('year')}>Chronological</Button>
      <Button onClick={() => setGroupProjectsBy('alphabetical')}>Alphabetical</Button>
      <Button onClick={() => setGroupProjectsBy('programmatic')}>Programmatic</Button>
      <Button onClick={() => setGroupProjectsBy('scale')}>Scale</Button>
      <Button onClick={() => setGroupProjectsBy('status')}>Status</Button>
    </Container>
  )
}

export default ProjectsOrderer

const Container = styled.aside`
  display: flex;

  margin-left: 1rem;
`
const Button = styled.button``
