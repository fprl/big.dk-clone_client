// import Image from 'next/image'
import styled from 'styled-components'

const Icon = ({ src, srcOnHover }) => {
  return (
    <Container>
      <Animation>
        <Ico src={src} visible />
        <Ico src={srcOnHover} />
      </Animation>
    </Container>
  )
}

export default Icon


const Container = styled.div`
  width: var(--icon-size);
  height: var(--icon-size);

  :hover img:first-child {
    display: none;
  }
  :hover img:last-child {
    display: block;
  }
`

const Animation = styled.div`
  width: 100%;
  height: 100%;

  transition: transform 0.2s;

  :hover {
    transform: scale(2);
  }
`

const Ico = styled.img`
  display: ${p => (p.visible ? 'block' : 'none')};
  width: 100%;
  height: 100%;

  object-fit: cover;
`
