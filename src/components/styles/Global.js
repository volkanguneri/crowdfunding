import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      text-decoration: none;
    }
    
    body {
      display: flex;
      justify-content: center;
      flex-direction: column;
      background-color: hsl(0, 0%, 90%);
      opacity:1;
    }
`

export default GlobalStyles;

