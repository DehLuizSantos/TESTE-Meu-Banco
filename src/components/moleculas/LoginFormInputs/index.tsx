import { Link } from 'react-router-dom';
import { Checkbox } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { LoginForm } from '@/hooks/useLogin';
import InputCustom from '../../atomos/Input';

type LoginFormInputProps = {
  form: UseFormReturnType<LoginForm>;
};

const LoginFormInputs = ({ form }: LoginFormInputProps) => {
  return (
    <>
      <InputCustom inputType="round" label="Usuário" {...form.getInputProps('email')} />
      <InputCustom inputType="password" label="Senha" {...form.getInputProps('password')} />
      <div className="confirm">
        <Checkbox {...form.getInputProps('forget')} label="Lembrar dispositivo" />

        <Link to="/esqueceu-senha" title="Esqueceu senha">
          Esqueceu senha
        </Link>
      </div>
    </>
  );
};

export default LoginFormInputs;
