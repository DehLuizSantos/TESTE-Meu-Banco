import styled, { css } from 'styled-components';

export const PainelConfigurationsWrapper = styled.div`
  ${({ theme }) => css`
    width: 350px;
    height: 100%;

    @media (min-width: ${theme.responsive.md}) {
      padding: 31px 36px;
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
  `}
`;

export const PainelConfigurationsShortCut = styled.div`
  ${({ theme }) => css`
    width: 205px;
    border-radius: 8px;
    text-align: center;
    background-color: ${theme.colors.lightGray};
    padding: 16px 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    @media (max-width: ${theme.responsive.md}) {
      width: 350px;
    }

    .plus {
      background-color: ${theme.colors.gray};
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin: 8px auto 16px auto;
    }

    p {
      font-size: ${theme.sizes.meddium};
      color: ${theme.colors.gray};
      font-weight: 700;
      margin: 4px auto;
      max-width: 125px;
    }
  `}
`;
