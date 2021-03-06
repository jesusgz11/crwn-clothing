import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed';
    padding: 1.2rem 3.8rem;
    @media screen and (max-width: 800px){
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
