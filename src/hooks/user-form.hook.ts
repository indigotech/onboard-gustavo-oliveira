import {useState} from 'react';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateBirthDate,
  validateRole,
  validatePassword,
} from '../utils/validation-utils';

export const useUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateFields = () => {
    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const phoneValidation = validatePhone(phone);
    const birthDateValidation = validateBirthDate(birthDate);
    const roleValidation = validateRole(role);
    const passwordValidation = validatePassword(password);

    setNameError(nameValidation);
    setEmailError(emailValidation);
    setPhoneError(phoneValidation);
    setBirthDateError(birthDateValidation);
    setRoleError(roleValidation);
    setPasswordError(passwordValidation);

    return (
      !nameValidation &&
      !emailValidation &&
      !phoneValidation &&
      !birthDateValidation &&
      !roleValidation &&
      !passwordValidation
    );
  };

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    birthDate,
    setBirthDate,
    role,
    setRole,
    password,
    setPassword,
    nameError,
    emailError,
    phoneError,
    birthDateError,
    roleError,
    passwordError,
    validateFields,
  };
};
