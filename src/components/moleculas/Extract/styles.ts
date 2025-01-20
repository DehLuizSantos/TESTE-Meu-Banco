import styled, { css } from 'styled-components';

export const ExtractWrapper = styled.div`
  ${({ theme }) => css`
    background-color: white;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 8px;
    max-width: 522px;
    width: 100%;
    padding: 24px;

    h4 {
      font-weight: 600;
      font-size: ${theme.sizes.meddium};
      color: ${theme.colors.gray};
    }

    .button-wrapper {
      width: 100%;
      text-align: center;

      .button-extract {
        margin-top: 36px;
        width: 169px;
      }
    }

    .extract-container {
      margin-top: 24px;

      h5 {
        color: ${theme.colors.green};
        font-size: ${theme.sizes.xSmall};
        font-weight: 700;
      }

      .purchace {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        padding: 4px;
        border-bottom: 1px solid ${theme.colors.dark};

        .infos {
          p {
            font-size: ${theme.sizes.xSmall};
            font-weight: 400;
            color: ${theme.colors.dark};
          }

          h6 {
            font-size: 12px;
            font-weight: 600;
            color: ${theme.colors.mediumGray};
          }
        }

        span {
          color: ${theme.colors.green};
        }
      }
    }
  `}
`;
