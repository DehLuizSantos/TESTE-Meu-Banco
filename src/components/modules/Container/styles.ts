import styled, { css } from 'styled-components';

export const ContainerWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${theme.responsive.md}) {
      position: relative;
      left: 280px;
      height: calc(100vh - 96px);
      display: block;
    }
  `}
`;
