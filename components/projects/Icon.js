import styled from 'styled-components'

const Icon = ({ src, srcOnHover, alt }) => {
  return (
    <Container>
      <Animation>
        <Ico src={src} alt={alt} visible />
        <Ico src={srcOnHover} />
      </Animation>
    </Container>
  )
}

export default Icon


const Container = styled.div`
  width: var(--icon-size);
  height: var(--icon-size);

  @media screen and (min-width: 1024px) {
    :hover img:first-child {
      display: none;
    }
    :hover img:last-child {
      display: block;
    } 
  }
`

const Animation = styled.div`
  width: 100%;
  height: 100%;

  transition: transform 0.2s;

  @media screen and (min-width: 1024px) {
    :hover {
      transform: scale(2);
    }
  }
`

const Ico = styled.img`
  display: ${p => (p.visible ? 'block' : 'none')};
  width: 100%;
  height: 100%;

  object-fit: cover;
`
