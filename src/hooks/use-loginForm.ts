import {useState} from 'react';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (text: string) => {
    if (!text.trim()) return 'Campo obrigatório';
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EMAIL_REGEX.test(text)) return 'E-mail com formato inválido';
    return '';
  };

  const validatePassword = (text: string) => {
    if (!text.trim()) return 'Campo obrigatório';
    const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/;
    if (!PASSWORD_REGEX.test(text))
      return 'A senha deve ter pelo menos 7 caracteres, com letras e números';
    return '';
  };

  const validateFields = () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    return !emailValidation && !passwordValidation;
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    validateFields,
  };
};
