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
      // background-image: url('/design/mobile-design.jpg');
      // background-image: url('/design/mobile-design-modal-default.jpg');
      // background-image: url('/design/desktop-design-modal-default.jpg');
      // background-image: url('/design/mobile-design-modal-selected.jpg');
      // background-image: url('/design/desktop-design-modal-selected.jpg');
      // background-image: url('/design/mobile-design-modal-completed.jpg');
      // background-image: url('/design/desktop-design-modal-completed.jpg');
      // background-image: url('/design/desktop-design.jpg');  
      // background-image: url('/design/mobile-menu.jpg');
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      // overflow: hidden;
      background-color: hsl(0, 0%, 90%);
      // opacity: .5;
      opacity:1;
    }
`

export default GlobalStyles;

