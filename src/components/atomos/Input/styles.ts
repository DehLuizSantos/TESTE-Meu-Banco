import styled, { css } from 'styled-components';
import { PasswordInput, TextInput } from '@mantine/core';

type InputDeTextProps = {
  color?: string;
};

export const InputCustomRoundWrapper = styled.div`
  ${({ theme }) => css`
    .label-abaixo {
      color: ${theme.colors.gray['700']};
      font-size: ${theme.sizes.xSmall};
      font-family: 'Ubunto Mono', monospace;
    }
  `}
`;

export const InputCustomRound = styled(TextInput)`
  ${() => css`
    font-weight: 400;
    border-radius: 8px;
  `}
`;

export const RightSelect = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray['500']};
    position: absolute;
    top: 0;
    bottom: -3px;
    right: 0;
    display: flex;
    align-items: center;
    width: 20px;
  `}
`;

export const InputCustomOutline = styled(TextInput)<InputDeTextProps>`
  ${() => css`
    max-width: 240px;
    .mantine-Input-wrapper {
      text-align: start;
    }

    input {
      background: transparent;
      border: 1px solid white;
      padding-left: 40px;
      color: white;

      &::placeholder {
        color: white;
        padding-left: 15px;
      }
    }
  `}
`;

export const InputDePassword = styled(PasswordInput)`
  ${({ theme }) => css`
    .right-section {
      width: 40px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px 0 0 8px;
    }

    .left-section {
      background-color: red;
    }
    .mantine-PasswordInput-error {
      text-align: start;
    }

    input {
      padding-left: 45px;

      &::placeholder {
        color: ${theme.colors.gray['500']};
      }
    }
  `}
`;

export const ReguaInput = styled(TextInput)<InputDeTextProps>`
  ${({ color }) => css`
    input {
      border-width: 1px 1px 1px 4px;
      border-style: solid;
      border-color: ${color};
    }
  `}
`;
