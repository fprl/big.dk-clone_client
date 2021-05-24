import styled from 'styled-components'

import { Button } from '../styled/Button'

const ProjectsOrderer = ({ orderer, setGroupProjectsBy }) => {
  function isActive(type) {
    return orderer === type ? true : false
  }

  return (
    <Container>
      <Divider>
        <Button>Info</Button>
      </Divider>
      <Divider>
        <Button isActive={isActive('year')} onClick={() => setGroupProjectsBy('year')}>Chronological</Button>
        <Button isActive={isActive('alphabetical')} onClick={() => setGroupProjectsBy('alphabetical')}>Alphabetical</Button>
        <Button isActive={isActive('programmatic')} onClick={() => setGroupProjectsBy('programmatic')}>Programmatic</Button>
        <Button isActive={isActive('scale')} onClick={() => setGroupProjectsBy('scale')}>Scale</Button>
        <Button isActive={isActive('status')} onClick={() => setGroupProjectsBy('status')}>Status</Button>
      </Divider>
      <Divider>
        <Button>All projects</Button>
      </Divider>
    </Container>
  )
}

export default ProjectsOrderer

const Container = styled.aside`
  position: absolute;
  display: flex;
  justify-content: space-between;

  bottom: 0;
  width: 100%;

  height: 2.5rem;
`

const Divider = styled.div`
`
