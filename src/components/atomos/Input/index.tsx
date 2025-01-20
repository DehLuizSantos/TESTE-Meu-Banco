import { memo, useCallback } from 'react';
import { TextInputProps } from '@mantine/core';
import { theme } from '../../../styles/theme';
import Icon from '../Icon';
import * as S from './styles';

export interface InputCustomProps extends TextInputProps {
  inputType: 'round' | 'outline' | 'password';
  labelAbaixo?: string;
  placeholder?: string;
  color?: string;
  categoria?: string;
}

const InputCustom = ({
  inputType,
  labelAbaixo,
  placeholder,
  categoria,
  color = theme.colors.blue,
  ...props
}: InputCustomProps) => {
  /* Renderiza conforme o tipo que você escolher */
  const renderInputCustom = useCallback(
    (tipo: 'round' | 'outline' | 'password') => {
      const selectsTipos = {
        round: (
          <S.InputCustomRoundWrapper color={color}>
            <S.InputCustomRound
              radius={8}
              data-testid="round"
              placeholder={placeholder}
              {...props}
            />
            {labelAbaixo?.length! > 0 && <label className="label-abaixo">{labelAbaixo}</label>}
          </S.InputCustomRoundWrapper>
        ),

        outline: (
          <S.InputCustomOutline
            radius={8}
            placeholder={placeholder}
            {...props}
            data-textid="outline"
          />
        ),
        password: (
          <S.InputDePassword
            color={color}
            placeholder={placeholder}
            label={props.label}
            mb={props.mb}
            onChange={props.onChange}
            error={props.error}
            value={props.value}
            radius={8}
          />
        ),
      };
      return selectsTipos[tipo];
    },
    [inputType, labelAbaixo, props]
  );

  return <>{renderInputCustom(inputType)}</>;
};

export default memo(InputCustom);
