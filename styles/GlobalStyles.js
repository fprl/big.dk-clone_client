import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    // mobile
    --icon-width: 36px;
    --col-height: 100%;


    // tablet
    @media (min-width: 768px) {
      --icon-width: 36px;
    }

    // laptop
    @media (min-width: 1024px) {
      --icon-width: 36px;
      --gap-width: 8px;
      --col-height: 31rem;
    }

    // desktop
    @media (min-width: 1600px) {
      --icon-width: 36px;
      --col-height: 40rem;
    }
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	  font-size: 16px;
	  font-weight: 400;
  }

  h1, h2, h3, h4, h5, p { max-width: 70ch; }
`

export default GlobalStyles
