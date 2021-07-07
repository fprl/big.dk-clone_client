import styled from 'styled-components'
import { useState } from 'react'

import { Button } from '../styled/Button'
import SearchBar from '../projects/SearchBar'

const ProjectsNavbar = ({ setSearchProjects }) => {
  const [isUserSearching, setIsUserSearching] = useState(false)

  return (
    <Container>
      <Divider>
        <Link href="#" as="a">BIG</Link>
      </Divider>
      <SearchBar isVisible={isUserSearching} setSearchProjects={setSearchProjects} />
      <Divider>
        <Button isActive={isUserSearching} onClick={() => setIsUserSearching(userSearching => !userSearching)}>{isUserSearching ? 'Searching' : 'Search'}</Button>
      </Divider>
    </Container>
  )
}

export default ProjectsNavbar

const Container = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  top: 0rem;
  padding-top: 0.5rem;

  z-index: 10;
  width: 100%;

  background-color: hsla(180, 0%, 100%, 0.6);
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
