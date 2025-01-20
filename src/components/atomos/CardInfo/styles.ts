import styled, { css } from 'styled-components';

export const CardInfoWrapper = styled.div`
  ${({ theme }) => css`
    margin: 16px 0;
    padding: 16px;
    background-color: ${theme.colors.white};
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 8px;

    @media (min-width: ${theme.responsive.md}) {
      width: 205px;
      margin: 0;
    }

    h5 {
      color: ${theme.colors.green};
      font-weight: 300;
      font-size: ${theme.sizes.large};
      margin-bottom: 31px;
    }

    p {
      font-size: ${theme.sizes.small};
      font-weight: 300;
      color: ${theme.colors.dark};
    }

    h4 {
      font-size: ${theme.sizes.large};
      font-weight: 700;
      color: ${theme.colors.dark};
    }
  `}
`;
