import Head from 'next/head'
import 'react-tippy/dist/tippy.css'

import GlobalStyles from '../styles/GlobalStyles'
import Reset from '../styles/Reset'
import '../styles/fonts.css' // separate because of styled-components bug

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Component {...pageProps} />    
    </>
  )
}

export default MyApp
