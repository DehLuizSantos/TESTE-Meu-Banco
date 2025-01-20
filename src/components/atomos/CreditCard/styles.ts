import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  width: 240px;
  height: 140px;
  border-radius: 16px;
  background: linear-gradient(248.54deg, #1bc681 1.38%, #0d603f 89.61%);
  color: white;
  padding: 1rem;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  font-family: 'JetBrains Mono', serif;
  position: relative;

  .icons {
    margin-top: 8px;
    display: flex;
    gap: 16px;
  }
`;

export const CardNumber = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.sizes.xSmall};
    letter-spacing: 2px;
    margin-top: 8px;
  `}
`;

export const CardHolderSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'JetBrains Mono', serif;
    font-size: 0.6rem;
  `}
`;

export const CardHolder = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const ExpirationDate = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 0.6rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;
