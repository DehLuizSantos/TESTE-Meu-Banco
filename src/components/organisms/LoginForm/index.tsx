import { Link } from 'react-router-dom';
import { Checkbox } from '@mantine/core';
import ButtonCustom from '@/components/atomos/Button';
import { theme } from '@/styles/theme';
import InputCustom from '../../atomos/Input';
import * as S from './styles';

const LoginForm = () => {
  return (
    <S.LoginFormWrapper>
      <div className="title">
        <h2>Bem vindo</h2>
        <span> :)</span>
      </div>
      <p>Entre na sua conta</p>

      <S.FormLogin>
        <InputCustom inputType="round" label="Usuário" />
        <InputCustom inputType="round" label="Senha" />
        <div className="confirm">
          <Checkbox label="Lembrar dispositivo" />

          <Link to="/esqueceu-senha" title="Esqueceu senha">
            Esqueceu senha
          </Link>
        </div>

        <ButtonCustom tipo="default" color={theme.colors.green} fullWidth>
          ENTRAR
        </ButtonCustom>
      </S.FormLogin>
      <div className="signin">
        <h4>Não tem conta?</h4>
        <button> Faça Agora</button>
      </div>
    </S.LoginFormWrapper>
  );
};

export default LoginForm;
