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
