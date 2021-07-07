import Head from 'next/head'
import router from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'

const Home = () => {
  useEffect(() => {
    router.push('/projects')
    // setTimeout(() => router.push('/projects'), 4000)
  })

  return (
    <Container>
      <ImageBackground>
        <Image src="./images/loading-end.jpeg" />
      </ImageBackground>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100vw;
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
  animation: loading 3s 1s backwards;
  margin: auto;

  @keyframes loading {
  0% { clip-path: inset(0px 100% 0px 0px); }
  100% { clip-path: inset(0px 0% 0px 0px); }
}
`
