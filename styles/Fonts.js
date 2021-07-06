import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`
  /* BigPixel */
  @font-face {
    font-family: 'BigPixel';
    src: url('fonts/bigPixel.woff') format('woff');
    font-weight: 1 999;
  }
  
  /* Klavika */
  @font-face {
    font-family: 'Klavika';
    src: url('fonts/generalsans/GeneralSans-Variable.woff2') format('woff2');
    font-weight: 1 999;
  }
`

export default Fonts
