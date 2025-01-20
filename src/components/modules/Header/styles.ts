import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 35px 22px 35px;
    flex-wrap: wrap;

    @media (min-width: ${theme.responsive.md}) {
      position: relative;
      left: 280px;
      width: calc(100% - 280px);
    }
  `}
`;

export const UserInformations = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    margin: 16px 0;

    @media (min-width: ${theme.responsive.md}) {
      margin: 0;
    }

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
        margin-left: 10px;
        font-size: ${theme.sizes.small};
      }
    }
  `}
`;
