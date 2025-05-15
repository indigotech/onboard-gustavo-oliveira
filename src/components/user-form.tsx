import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MainInput} from './main-input';
import {MainButton} from './main-button';
import {MainPicker} from './main-picker';

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

export const UserForm: React.FC<UserFormProps> = props => {
  return (
    <View style={styles.container}>
      <MainInput
        title="Nome"
        type="default"
        placeholder="Digite seu nome"
        value={props.name}
        onChange={props.setName}
        error={props.nameError}
      />
      <MainInput
        title="E-mail"
        type="email-address"
        placeholder="Digite seu e-mail"
        value={props.email}
        onChange={props.setEmail}
        error={props.emailError}
      />
      <MainInput
        title="Telefone"
        type="numeric"
        placeholder="Digite seu telefone"
        value={props.phone}
        onChange={props.setPhone}
        error={props.phoneError}
      />
      <MainInput
        title="Data de Nascimento"
        type="default"
        placeholder="DD/MM/AAAA"
        value={props.birthDate}
        onChange={props.setBirthDate}
        error={props.birthDateError}
      />
      <MainPicker
        placeholder="selecione um papel"
        title="Role"
        selectedValue={props.role}
        onValueChange={props.setRole}
        options={[
          {label: 'Admin', value: 'admin'},
          {label: 'User', value: 'user'},
        ]}
        error={props.roleError}
      />
      <MainInput
        title="Senha"
        type="password"
        placeholder="Digite sua senha"
        value={props.password}
        onChange={props.setPassword}
        error={props.passwordError}
      />
      <MainButton
        title="Adicionar Usuário"
        onPress={props.onSubmit}
        disabled={props.disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
