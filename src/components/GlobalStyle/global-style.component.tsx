import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`${css`
  :root {
    // colors
    --color-text: black;
    --color-a-hover: #acbdaa;

    //carousel
    --carousel-minheight: 250px;

    //breakpoints
    --breakpoint-xs: 420px;
    --breakpoint-sm: 800px;
    --breakpoint-lg: 1200px;
    --breakpoint-xl: 1600px;
    --breakpoint-xxl: 1800px;

    // responsive
    @media (min-width: var(--breakpoint-xl)) {
      --carousel-minheight: initial;
    }
  }

  body {
    padding: 0;
    margin: 0;
    outline: none;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  h1 {
    font-size: 25px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  p {
    line-height: 24px;
  }

  a:-webkit-any-link {
    text-decoration: none;
  }

  a {
    color: var(--color-text);

    &:hover {
      color: var(--color-a-hover);
    }
  }
`}`;
