import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MainInput} from './main-input';
import {MainButton} from './main-button';

interface UserFormProps {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  birthDate: string;
  setBirthDate: (value: string) => void;
  role: string;
  setRole: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  nameError: string;
  emailError: string;
  phoneError: string;
  birthDateError: string;
  roleError: string;
  passwordError: string;
  onSubmit: () => void;
  disabled: boolean;
}

export const UserForm: React.FC<UserFormProps> = ({
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
  onSubmit,
  disabled,
}) => {
  return (
    <View style={styles.container}>
      <MainInput
        title="Nome"
        type="default"
        placeholder="Digite seu nome"
        value={name}
        onChange={setName}
        error={nameError}
      />
      <MainInput
        title="E-mail"
        type="email-address"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={setEmail}
        error={emailError}
      />
      <MainInput
        title="Telefone"
        type="numeric"
        placeholder="Digite seu telefone"
        value={phone}
        onChange={setPhone}
        error={phoneError}
      />
      <MainInput
        title="Data de Nascimento"
        type="default"
        placeholder="DD/MM/AAAA"
        value={birthDate}
        onChange={setBirthDate}
        error={birthDateError}
      />
      <MainInput
        title="Função"
        type="default"
        placeholder="admin ou user"
        value={role}
        onChange={setRole}
        error={roleError}
      />
      <MainInput
        title="Senha"
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={setPassword}
        error={passwordError}
      />
      <MainButton
        title="Adicionar Usuário"
        onPress={onSubmit}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
