import styled, { css } from 'styled-components';
import { theme } from '@/styles/theme';

export const CardDetailsContainer = styled.div`
  ${({ theme }) => css`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px #00000040;
    padding: 31px 36px;
    max-width: 532px;
    width: 100%;
    margin: 16px 0;

    @media (min-width: ${theme.responsive.md}) {
      max-height: 300px;
      margin: 0 36px;
    }

    h5 {
      font-weight: 600;
      font-size: ${theme.sizes.meddium};
      color: ${theme.colors.dark};
      margin-bottom: 16px;
    }

    .description {
      @media (min-width: ${theme.responsive.md}) {
        display: flex;
        justify-content: space-between;
      }
    }
  `}
`;

export const CartLimitContainer = styled.div`
  ${({ theme }) => css`
    max-width: 240px;

    .limit {
      display: flex;
      justify-content: space-between;
      font-size: ${theme.sizes.small};
      font-weight: 400;
      color: ${theme.colors.gray};
    }
  `}
`;

export const LimitDescription = styled.div`
  ${() => css`
    width: 187px;

    p {
      font-size: ${theme.sizes.meddium};
      font-weight: 300;
      color: ${theme.colors.gray};
    }

    h6 {
      font-size: ${theme.sizes.large};
      font-weight: 600;
      color: ${theme.colors.gray};
      margin-bottom: 26px;
    }
    .local {
      display: flex;
      justify-content: space-between;
      margin-bottom: 26px;
      span {
        font-size: ${theme.sizes.small};
        font-weight: 600;
        color: ${theme.colors.gray};
      }
    }
  `}
`;
