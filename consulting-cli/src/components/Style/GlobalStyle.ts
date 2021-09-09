import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  :root {
    --color-primary: #0066cc;
    --color-primary-accent: #1a8cff;
    --color-white: #f5faff;

    --color-open-activity: #008000;
    --color-closed-activity: #ff6666;
  }

  input, select {
    border: none;
    padding: .25rem;
  }

  button {
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`