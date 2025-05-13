export const validateEmail = (email: string) => {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return 'Campo obrigatório';
  if (!EMAIL_REGEX.test(email)) return 'E-mail com formato inválido';
  return '';
};

export const validatePassword = (password: string) => {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/;
  if (!password.trim()) return 'Campo obrigatório';
  if (!PASSWORD_REGEX.test(password)) {
    return 'A senha deve ter pelo menos 7 caracteres, com letras e números';
  }
  return '';
};
