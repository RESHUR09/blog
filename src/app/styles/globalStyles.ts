import { css } from '@emotion/react';
import { reset } from './reset';
export const globalStyles = css`
  ${reset}
  * {
    box-sizing: border-box;
    outline: 0;
  }
  html,
  body {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    font-family: var(--font-noto-sans);
    display: flex;
    flex-direction: column;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
