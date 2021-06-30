import Head from 'next/head'
import router from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    router.push('/projects')
  })

  return null
}
