import styled from 'styled-components'

import { Button } from '../styled/Button'

const ProjectsOrderer = () => {
  return (
    <Container>
      <Divider>
        <Link href="#" as="a">BIG</Link>
      </Divider>
      <Divider>
        <Button>Search</Button>
      </Divider>
    </Container>
  )
}

export default ProjectsOrderer

const Container = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  top: 0;
  width: 100%;

  height: 2rem;
`

const Divider = styled.div`

`

const Link = styled(Button)`
  
`