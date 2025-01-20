import styled, { css } from 'styled-components';

export const ShellContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
  `}
`;

export const ToogleMobile = styled.div`
  display: block;
  position: fixed;
  top: 10px;
  right: 10px;

  ${({ theme }) => css`
    @media (min-width: ${theme.responsive.md}) {
      display: none;
    }
  `}
`;
