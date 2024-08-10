// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1.5rem;
    color: #333;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #0073e6;

    &:hover {
      color: #005bb5;
    }
  }

  button {
    font-family: 'Arial', sans-serif;
    cursor: pointer;
  }
`;
