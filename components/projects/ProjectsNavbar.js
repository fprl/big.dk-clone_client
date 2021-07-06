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

  background-color: hsla(180, 0%, 100%, 0.6);
  z-index: 10;

  top: 0;
  width: 100%;

  @media screen and (min-width: 1024px) {
    height: 2rem;
  }
`

const Divider = styled.div`

`

const Link = styled(Button)`
  font-family: "BigPixel";
  font-size: 2rem;

  @media screen and (min-width: 1024px) {
    font-size: 1.1rem;
  }
`
