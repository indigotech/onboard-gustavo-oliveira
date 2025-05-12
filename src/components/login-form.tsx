import React from 'react';
import {View} from 'react-native';
import {MainInput} from './main-input';
import {MainButton} from './main-button';

interface LoginFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  emailError: string;
  passwordError: string;
  onSubmit: () => void;
  disabled: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = props => {
  return (
    <View>
      <MainInput
        title="E-mail"
        type="email"
        value={props.email}
        onChange={props.setEmail}
        error={props.emailError}
      />
      <MainInput
        title="Senha"
        type="password"
        value={props.password}
        onChange={props.setPassword}
        error={props.passwordError}
      />
      <MainButton
        title="Entrar"
        onPress={props.onSubmit}
        disabled={props.disabled}
      />
    </View>
  );
};
