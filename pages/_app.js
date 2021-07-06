import Head from 'next/head'
import 'react-tippy/dist/tippy.css'

import GlobalStyles from '../styles/GlobalStyles'
import Reset from '../styles/Reset'
import Fonts from '../styles/Fonts'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Fonts />
      <Reset />
      <GlobalStyles />
      <Component {...pageProps} />    
    </>
  )
}

export default MyApp
