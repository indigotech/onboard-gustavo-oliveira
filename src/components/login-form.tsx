import React from 'react';
import {View} from 'react-native';
import {MainInput} from './main-input';
import {MainButton} from './main-button';

type Props = {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  emailError: string;
  passwordError: string;
  onSubmit: () => void;
  disabled: boolean;
};

export const LoginForm: React.FC<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  passwordError,
  onSubmit,
  disabled,
}) => (
  <View>
    <MainInput
      title="E-mail"
      type="email"
      value={email}
      onChange={setEmail}
      error={emailError}
    />
    <MainInput
      title="Senha"
      type="password"
      value={password}
      onChange={setPassword}
      error={passwordError}
    />
    <MainButton title="Entrar" onPress={onSubmit} disabled={disabled} />
  </View>
);
