const DATE_REGEX = /^\d{2}\/\d{2}\/\d{4}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/;
const PHONE_REGEX = /^\d{10,11}$/;

export const validateEmail = (email: string) => {
  if (!email.trim()) {
    return 'Campo obrigatório';
  }
  if (!EMAIL_REGEX.test(email)) {
    return 'E-mail com formato inválido';
  }
  return '';
};

export const validatePassword = (password: string) => {
  if (!password.trim()) {
    return 'Campo obrigatório';
  }
  if (!PASSWORD_REGEX.test(password)) {
    return 'A senha deve ter pelo menos 7 caracteres, com letras e números';
  }
  return '';
};

export const validateName = (name: string) => {
  if (!name.trim()) {
    return 'Campo obrigatório';
  }
  if (name.trim().split(' ').length < 2) {
    return 'Informe o nome completo';
  }
  return '';
};

export const validatePhone = (phone: string) => {
  if (!phone.trim()) {
    return 'Campo obrigatório';
  }
  if (!PHONE_REGEX.test(phone)) {
    return 'Telefone deve ter 10 ou 11 dígitos';
  }
  return '';
};

export const validateBirthDate = (birthDate: string) => {
  if (!birthDate.trim()) {
    return 'Campo obrigatório';
  }
  if (!DATE_REGEX.test(birthDate)) {
    return 'Data inválida';
  }

  const [day, month, year] = birthDate.split('/').map(Number);

  if (month < 1 || month > 12) {
    return 'Mês inválido';
  }
  if (year < 1900 || year > new Date().getFullYear()) {
    return 'Ano inválido';
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    return 'Dia inválido';
  }

  const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(
    day,
  ).padStart(2, '0')}`;
  const date = new Date(formattedDate);
  const today = new Date();

  if (date > today) {
    return 'Data não pode estar no futuro';
  }

  return '';
};

export const validateRole = (role: string) => {
  if (!role.trim()) {
    return 'Campo obrigatório';
  }
  if (!['admin', 'user'].includes(role)) {
    return 'Função inválida';
  }
  return '';
};
