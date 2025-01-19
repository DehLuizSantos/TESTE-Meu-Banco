import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const LinkWrapper = styled(Link)`
  ${() => css``}
`;

export const LinkDescription = styled.div`
  ${({ theme }) => css`
    margin-left: auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 16px;
    width: 240px;
    height: 54px;
    border-radius: 12px 0 0 12px;

    span {
      font-size: ${theme.sizes.meddium};
      text-transform: capitalize;
      font-weight: 600;
    }
  `}
`;
