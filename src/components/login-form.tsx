import React from 'react';
import {View, StyleSheet} from 'react-native';
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

export const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  passwordError,
  onSubmit,
  disabled,
}) => {
  return (
    <View style={styles.container}>
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
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
