import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    // mobile
    --font-size-: 0.7rem;

    --icon-size: 45px;
    --gap-width: 0.5rem;
    --col-height: 100%;
  
    --section-gap-s: 0.5rem;
    --section-gap-m: 1rem;
    --section-gap-l: 2rem;


    // tablet
    @media (min-width: 768px) {
      --font-size: 1rem;
      --icon-size: 60px;
    }

    // horizontal tablet
    @media (min-width: 1024px) {
      --font-size: 0.7rem;
      --icon-size: 30px;
      --gap-width: 0.5rem;
      --col-height: 35rem;
    }

    // laptop
    @media (min-width: 1200px) {
      --icon-size: 36px;
      --gap-width: 0.5rem;
      --col-height: 31rem;
    }

    // desktop
    @media (min-width: 1600px) {
      --icon-size: 36px;
      --col-height: 40rem;
    }
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	  font-size: 16px;
	  font-weight: 400;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, p { max-width: 70ch; }
`

export default GlobalStyles
