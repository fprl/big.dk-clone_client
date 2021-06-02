import Image from 'next/image'
import styled from 'styled-components'

const Icon = ({ src, srcOnHover }) => {
  return (
    <Container>
      <Ico src={src} visible />
      <Ico src={srcOnHover} />
    </Container>
  )
}

export default Icon

const Container = styled.div`
  height: 100%;
  width: 100%;

  :hover img:first-child {
    display: none;
  }
  :hover img:last-child {
    display: block;
  }
`

const Ico = styled.img`
  display: ${p => (p.visible ? 'block' : 'none')};
  width: 100%;
  height: 100%;

  object-fit: cover;
`
