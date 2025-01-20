import { UseFormReturnType } from '@mantine/form';
import { SignInForm } from '@/hooks/useLogin';
import InputCustom from '../../atomos/Input';

type SignInFormInputsProps = {
  form: UseFormReturnType<SignInForm>;
};

const SignInFormInputs = ({ form }: SignInFormInputsProps) => {
  return (
    <>
      <InputCustom inputType="round" label="Usuário" {...form.getInputProps('email')} />

      <InputCustom inputType="password" label="Senha" {...form.getInputProps('password')} />

      <InputCustom
        inputType="password"
        label="Confirmar Senha"
        mb={'16px'}
        className="confirm-password"
        {...form.getInputProps('confirmPassword')}
      />
    </>
  );
};

export default SignInFormInputs;
