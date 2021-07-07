import styled from 'styled-components'

const Loading = () => {
  return (
    <Container>
      <ImageBackground>
        <Image src="./images/loading-end.jpeg" />
      </ImageBackground>
    </Container>
  )
}

export default Loading

const Container = styled.div`
  position: absolute;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100vw;

  background-color: white;
`

const ImageBackground = styled.div`
  display: flex;
  background: url('images/loading-start.jpeg') no-repeat transparent;
  background-size: 80%;
  background-position: center;
`

const Image = styled.img`
  width: 80%;
  /* clip-path: inset(0px 100% 0px 0px); */
  animation: loading 2s 0.5s backwards;
  margin: auto;

  @keyframes loading {
    0% {
      clip-path: inset(0px 100% 0px 0px);
    }
    100% {
      clip-path: inset(0px 0% 0px 0px);
    }
  }
`
