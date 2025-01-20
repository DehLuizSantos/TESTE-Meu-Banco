import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.aside`
  ${({ theme }) => css`
    display: none;
    background-color: white;
    padding-top: 24px;

    @media (min-width: ${theme.responsive.md}) {
      display: block;
      position: fixed;
      width: 280px;
      height: 100vh;
      top: 0;
      bottom: 0;
    }
  `}
`;

export const LogoWrapper = styled.div`
  margin: 24px 40px;
`;

export const MenuSidebarWrapper = styled.div`
  ${() => css`
    margin-top: 60px;
  `}
`;

export const HelpSidebarFooter = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.responsive.md}) {
      display: block;
      background-color: ${theme.colors.green};
      color: ${theme.colors.white};
      border-radius: 6px;
      padding: 16px;
      width: 220px;
      height: 198px;
      position: relative;
      bottom: -300px;
      left: 30px;
    }

    .description {
      max-width: 150px;
    }

    h3 {
      font-size: ${theme.sizes.large};
      font-weight: 700;
      max-width: 120px;
      margin-bottom: 16px;
    }

    p {
      font-size: ${theme.sizes.small};
      font-weight: 400;
      margin-bottom: 16px;
    }
  `}
`;
