import { Notification } from '@mantine/core';
import LoginForm from '@/components/organisms/LoginForm';
import logo from '../../assets/imagens/logo-white.svg';
import * as S from './styles';

const Login = () => {
  return (
    <S.LoginWrapper>
      <aside>
        <img src={logo} alt="Meu banco" title="Meu banco" />
      </aside>
      <S.LoginFormWrapper>
        <LoginForm />
      </S.LoginFormWrapper>
    </S.LoginWrapper>
  );
};

export default Login;
