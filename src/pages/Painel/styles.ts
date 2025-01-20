import styled, { css } from 'styled-components';

export const PainelWrapper = styled.div`
  ${({ theme }) => css`
    .container {
      .footer {
        @media (min-width: ${theme.responsive.md}) {
          display: flex;
          padding-bottom: 100px;
        }
      }
    }
  `}
`;
