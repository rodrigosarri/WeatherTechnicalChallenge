import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: "Poppins", sans-serif;
    --font-secondary: "Roboto", sans-serif;
    --font-awesome: "Font Awesome 6 Free";

    --color-frosty-white: #ffffff;
    --color-night-sky: #000000;
    --color-lavender-dream: #674480;
    --color-mystic-eggplant: #4C2767;
    --color-wizard-gown: #49295F;
    --color-pixie-dust-plum: #785592;
    --color-mystical-grape: #75578B;
    --color-wizard-robe-purple: #5A3674;
    --color-sunny-mango: #F58520;
    --color-frosty-wind: #C5CCD6;
    --color-midnight-orchid: #462160;
    --color-enchanted-plum: #65427E;
    --color-mystic-lavender-shadow: #674480;
    --color-ethereal-lavender: #A390BC;
    --color-whimsical-lilac-dream: #b4a7d6;

    --weight-light: 300;
    --weight-regular: 400;
    --weight-medium: 500;
    --weight-semi-bold: 600;
    --weight-bold: 700;
    --weight-extra-bold: 800;
    --weight-black: 900;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    position: relative;
    background: linear-gradient(to bottom, var(--color-lavender-dream) 0%, var(--color-mystic-eggplant) 100%);
    background-repeat: no-repeat;
    max-width: 100vw;
    margin: 0 auto;
    overflow: hidden;
  }
  body {
    font-family: var(--font-primary);
    line-height: 1;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    padding: 8px;
    position: relative;
    max-width: 100vw;
    margin: 0 auto;
    overflow: hidden;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }
  *:focus {
    outline: none;
  }
`;