import {useState} from 'react';
import {validateEmail, validatePassword} from '../utils/validation-utils';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
