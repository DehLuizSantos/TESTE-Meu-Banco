import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    height: 84px;
    position: relative;
    left: 280px;
    width: calc(100% - 280px);
    padding: 0 35px 30px 35px;
    background-color: ${theme.colors.green};
  `}
`;
