import styled, { css } from 'styled-components';

export const ContainerWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    left: 280px;
    height: calc(100vh - 96px);
    width: calc(100% - 280px);
    background-color: ${theme.colors.green};
  `}
`;
