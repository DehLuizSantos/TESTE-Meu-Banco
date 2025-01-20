import styled, { css } from 'styled-components';

export const PlaceholderNavigationWrapper = styled.main`
  ${({ theme }) => css`
    width: 350px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 32px;
    border-radius: 8px;
    height: calc(100vh - 156px);
    /* width: 100%; */

    @media (min-width: ${theme.responsive.md}) {
      width: calc(100vw - 345px);
      margin: 0 32px;
    }
  `}
`;
