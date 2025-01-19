import React, { useCallback } from 'react';
import { ButtonProps } from '@mantine/core';
import { theme } from '../../../styles/theme';
import * as S from './styles';

export interface ButtonCustomProps extends ButtonProps {
  tipo: 'default' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
  color?: string;
}

const ButtonCustom = ({
  tipo,
  children,
  onClick,
  type,
  color = theme.colors.blue,
  ...buttonProps
}: ButtonCustomProps) => {
  const renderButton = useCallback(
    (tipo: 'default' | 'outline') => {
      const buttonTypes = {
        default: (
          <S.BotaoDefault
            color={color}
            type={type}
            tipo="default"
            onClick={onClick}
            {...buttonProps}
          >
            {children}
          </S.BotaoDefault>
        ),
        outline: (
          <S.ButtonOutline
            type={type}
            color={color}
            tipo="outline"
            onClick={onClick}
            {...buttonProps}
          >
            {children}
          </S.ButtonOutline>
        ),
      };

      return buttonTypes[tipo];
    },
    [tipo, buttonProps, children]
  );
  return <>{renderButton(tipo)}</>;
};

export default ButtonCustom;
