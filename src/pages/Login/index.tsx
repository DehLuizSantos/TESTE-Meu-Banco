import { Notification } from '@mantine/core';
import Icon from '@/components/atomos/Icon';
import LoginForm from '@/components/organisms/LoginForm';
import logo from '../../assets/imagens/logo-white.svg';
import * as S from './styles';

const Login = () => {
  return (
    <S.LoginWrapper>
      <aside>
        <Icon svg={logo} width={144} height={62} />
      </aside>
      <S.LoginFormWrapper>
        <LoginForm />
      </S.LoginFormWrapper>
    </S.LoginWrapper>
  );
};

export default Login;
