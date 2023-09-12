import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #310A31;
  }

  html, body, #root {
    min-height: 100%;
  }
 
  body {
    background: #e1eec3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f05053, #e1eec3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f05053, #e1eec3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  button {
    cursor: pointer;
  }
`;
