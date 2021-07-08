import Head from 'next/head'
import router from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'

const Home = () => {
  useEffect(() => {
    router.push('/projects')
  })

  return null
}

export default Home
