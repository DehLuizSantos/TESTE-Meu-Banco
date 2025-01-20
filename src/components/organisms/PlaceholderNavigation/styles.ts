import styled, { css } from 'styled-components';

export const PlaceholderNavigationWrapper = styled.main`
  ${() => css`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    margin: 0 32px;
    border-radius: 8px;
    height: calc(100vh - 156px);
  `}
`;
