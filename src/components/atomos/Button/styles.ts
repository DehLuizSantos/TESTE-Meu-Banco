import { ButtonCustomProps } from '.';
import styled, { css } from 'styled-components';
import { Button } from '@mantine/core';

export const BotaoDefault = styled(Button)<ButtonCustomProps>`
  ${({ theme, color }) => css`
    font-weight: 600;
    font-size: ${theme.sizes.meddium};

    &:hover {
      border: 1px solid ${color};
      color: ${color};
      background-color: ${theme.colors.white};
      box-shadow: 0px 2px 3px 0px ${color};
    }
    &:disabled {
      border: 1px solid ${theme.colors.gray['500']};
      background-color: ${theme.colors.gray['300']};
      color: ${theme.colors.gray['500']};
      cursor: not-allowed;

      &:hover {
        background-color: ${theme.colors.gray['300']};
        color: ${theme.colors.gray['500']};
        box-shadow: none;
      }
    }
  `}
`;
export const ButtonOutline = styled(Button)<ButtonCustomProps>`
  ${({ theme, color }) => css`
    background-color: transparent;
    border: 1px solid ${color};
    color: ${color};
    font-weight: 600;
    font-size: ${theme.sizes.meddium};

    &:hover {
      box-shadow: 0px 2px 2px 0px ${color};
      color: ${color};
    }

    &:active {
      box-shadow: 0px 2px 3px 0px ${color};
    }

    &:disabled {
      border: 1px solid ${theme.colors.gray};
      background-color: ${theme.colors.gray};
      opacity: 0.7;
      color: ${theme.colors.white};
      cursor: not-allowed;
    }
  `}
`;
