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
    overflow: hidden;
  }

  :root {
    --color-primary: #0066cc;
    --color-primary-accent: #1a8cff;
    --color-white: #fdfeff;
    --color-white-blue: #e5f2ff;

    --color-open-activity: #008000;
    --color-closed-activity: #ff6666;

    --color-border: #b3b3b3;
    --color-sidebar: #004080;
  }

  input, select, textarea {
    border: none;
    padding: .25rem;
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: 6px;
  }

  button {
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`