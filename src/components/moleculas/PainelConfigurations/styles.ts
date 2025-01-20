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
