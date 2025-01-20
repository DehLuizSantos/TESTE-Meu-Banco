type User = {
  email: string;
  password: string;
};
export function isValidUser(
  form: { values: { email: string; password: string } },
  allUsers: User[]
): boolean {
  const user = allUsers.find((user) => user.email === form.values.email);

  // Verifica se o email existe e se a senha está correta
  return user ? user.password === form.values.password : false;
}

export function isUserAlreadyRegistered(form: User, existingUsers: User[]): boolean {
  // Verifica se já existe um usuário com o mesmo email e senha
  const userExists = existingUsers.some(
    (user) => user.email === form.email && user.password === form.password
  );

  return userExists; // Retorna false se o usuário já existir, caso contrário, retorna true
}
