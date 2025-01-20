import styled, { css } from 'styled-components';
import mulherBackground from '../../assets/imagens/login-background.png';

export const LoginWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    aside {
      width: 100%;
      padding: 32px;
      height: 100vh;
      background-image: url(${mulherBackground}); /* Usa a imagem importada */
      background-size: cover; /* Faz a imagem cobrir todo o espaço do container */
      background-position: center; /* Centraliza a imagem */
      background-repeat: no-repeat; /* Evita repetição da imagem */

      @media (max-width: ${theme.responsive.md}) {
        display: none;
      }
    }
  `}
`;

export const LoginFormWrapper = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  `}
`;
