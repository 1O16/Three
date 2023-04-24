import { css } from '@emotion/react';
import { reset } from './reset';

export const globalStyle = css`
  ${reset}
  :root {
    --color-primary: #4cb050;
    --color-primary-darker: #39933d;
    --color-border: #e2e3eb;
    --color-background: #f7f7f7;
    --color-text-primary: #1d1c24;
    --color-text-secondary: #848894;
    --color-text-description: #6a6a6a;
    --color-text-price: #dd2525;
    --color-text-flex: var(--color-background);
    --price-level-0: #4f8bff;
    --price-level-1: #32b038;
    --price-level-2: #2a952e;
    --price-level-3: #227d26;
    --price-level-4: #154d17;
    --price-level-5: #e9b738;
    --color-flex: var(--price-level-5);
  }
  @font-face {
    font-family:  'Pretendard', 'sans-serif',
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
  }
  * {
    box-sizing: border-box;
    font-family: 'Pretendard';
    margin: 0 auto;
    padding: 0;
  }
  html {
    font-size: 10px;
    color: #fff;
  }
  body {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Pretendard';
    letter-spacing: -0.05rem;
    color: var(--color-text-primary);
    background-color: var(--color-background);
  }
  .outer {
    height: 100vh;
    overflow-y: auto;
  }
  .outer::-webkit-scrollbar {
    display: none;
  }
  .inner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
