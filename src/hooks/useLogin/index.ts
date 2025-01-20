import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import store from 'store2';
import { UseFormReturnType } from '@mantine/form';
import { isUserAlreadyRegistered, isValidUser } from '@/utils/validateEmail';

export type LoginForm = {
  email: string;
  password: string;
  forget: boolean;
};

export type SignInForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const handlePostLogin = async (form: UseFormReturnType<LoginForm>) => {
    const allUsers = store.local.get('users') ?? [];
    const result = isValidUser(form, allUsers);
    if (result) {
      toast.success(`Seja bem vindo! ${form.values.email}`);
      store.local.set('email', form.values.email);
      navigate('/painel');

      return true;
    }
    toast.error('Usuário ou senha não conferem!');
    return false;
  };

  const handlePostSignIn = async (
    form: UseFormReturnType<SignInForm>,
    formLogin: UseFormReturnType<LoginForm>
  ) => {
    debugger;
    const allUsers = store.local.get('users') ?? [];
    const allUsersAtt = [...allUsers, form.values];
    store.local.set('users', allUsersAtt);

    const isUserExist = isUserAlreadyRegistered(form.values, allUsers);

    if (isUserExist) {
      toast.error('Já existe um usuário com este email');
      return;
    }
    form.reset();
    toast.success('Usuário criado com sucesso!');
    formLogin.setValues({ email: form.values.email, password: form.values.password });
    return true;
  };

  return { handlePostLogin, handlePostSignIn };
};
