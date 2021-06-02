import styled from 'styled-components'
import { Tooltip } from 'react-tippy'

import { Button } from '../styled/Button'
import Info from '../info/Info'

const ProjectsOrderer = ({ orderer, setGroupProjectsBy }) => {
  function isActive(type) {
    return orderer === type ? true : false
  }

  return (
    <Container>
      <Divider>
        <Tooltip html={<Info />} position="top" size="regular" offset={0} distance={0} theme='light' interactive={true}>
          <Button>Info</Button>
        </ Tooltip>
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
