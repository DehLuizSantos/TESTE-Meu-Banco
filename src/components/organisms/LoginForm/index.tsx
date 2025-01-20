import { useCallback, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useForm } from '@mantine/form';
import ButtonCustom from '@/components/atomos/Button';
import LoginFormInputs from '@/components/moleculas/LoginFormInputs';
import SignInFormInputs from '@/components/moleculas/SignInFormInputs';
import { useLogin } from '@/hooks/useLogin';
import { theme } from '@/styles/theme';
import * as S from './styles';

const LoginForm = () => {
  const { handlePostLogin, handlePostSignIn } = useLogin();
  const [isSignin, setIsSignIn] = useState(false);
  const formLogin = useForm({
    mode: 'controlled',
    initialValues: {
      email: '',
      password: '',
      forget: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalido!'),
      password: (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,16}$/.test(value)
          ? null
          : 'Senha invalida!',
    },
  });
  const formSignin = useForm({
    mode: 'controlled',
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalido!'),
      confirmPassword: (value, values) => {
        return value === values.password ? null : 'A senha está diferente';
      },
      password: (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,16}$/.test(value)
          ? null
          : 'A senha deve conter entre 8 e 16 caracteres, incluindo ao menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (#?!@$%^&*-).',
    },
  });

  const handleMutatePostLogin = useMutation({
    mutationFn: () =>
      isSignin ? handlePostSignIn(formSignin, formLogin) : handlePostLogin(formLogin),
    onSuccess: () => isSignin && setIsSignIn(false),
  });

  const handleSubmitLogin = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (isSignin ? formSignin.validate().hasErrors : formLogin.validate().hasErrors) {
        return;
      }
      handleMutatePostLogin.mutate();
    },
    [formLogin, formSignin, isSignin]
  );

  return (
    <S.LoginFormWrapper>
      <div className="title">
        <h2>Bem vindo</h2>
        <span> :)</span>
      </div>
      <p>{!isSignin ? 'Entre na sua conta' : 'Cadastre uma conta'} </p>

      <S.FormLogin onSubmit={(e) => handleSubmitLogin(e)}>
        {/* Renderiza conforme estado esperado */}
        {!isSignin ? <LoginFormInputs form={formLogin} /> : <SignInFormInputs form={formSignin} />}

        <ButtonCustom type="submit" tipo="default" color={theme.colors.green} fullWidth>
          {isSignin ? 'CADASTRAR' : 'ENTRAR'}
        </ButtonCustom>
      </S.FormLogin>
      <div className="signin">
        {!isSignin && <h4>Não tem conta?</h4>}
        <button title="Cadastrar Login" onClick={() => setIsSignIn(!isSignin)}>
          {!isSignin ? 'Faça Agora' : 'Logar'}
        </button>
      </div>
    </S.LoginFormWrapper>
  );
};

export default LoginForm;
