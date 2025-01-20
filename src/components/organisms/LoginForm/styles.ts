import styled, { css } from 'styled-components';

export const LoginFormWrapper = styled.div`
  ${({ theme }) => css`
    width: 360px;
    height: 390px;
    margin: auto auto;

    .title {
      display: flex;
      align-items: center;
      gap: 15px;

      h2 {
        font-size: ${theme.sizes.xLarge};
        font-weight: 700;
        color: ${theme.colors.gray};
      }

      span {
        color: ${theme.colors.green};
        font-size: ${theme.sizes.xLarge};
        font-weight: 700;
      }
    }

    .signin {
      display: flex;
      align-items: center;
      margin-top: 24px;
      justify-content: space-around;

      h4 {
        font-size: ${theme.sizes.large};
        color: ${theme.colors.dark};
        font-weight: 300;
      }

      button {
        font-size: ${theme.sizes.large};
        color: ${theme.colors.green};
        font-weight: 600;
      }
    }
  `}
`;

export const FormLogin = styled.form`
  ${({ theme }) => css`
    margin-top: 48px;

    a {
      color: ${theme.colors.blue};
    }

    .confirm {
      display: flex;
      justify-content: space-between;
      margin: 24px 0;
    }

    .confirm-password {
      margin-bottom: 16px;
    }
  `}
`;
