import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    position: relative;
    left: 280px;
    width: calc(100% - 280px);
    padding: 30px 35px 30px 35px;
    background-color: ${theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const UserInformations = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;

    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        color: ${theme.colors.white};
        font-weight: 400;
        font-size: ${theme.sizes.small};
      }

      span {
        color: ${theme.colors.white};
        font-weight: 700;
        font-size: ${theme.sizes.small};
      }
    }
  `}
`;
