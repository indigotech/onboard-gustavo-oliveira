import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LoginForm} from '../components/login-form';
import {LoadingModal} from '../components/loading-modal';
import {useLoginForm} from '../hooks/use-loginForm';
import {useLogin} from '../hooks/use-login';

export const LoginPage: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    validateFields,
  } = useLoginForm();

  const {login, loading} = useLogin();

  const handleSubmit = () => {
    if (validateFields()) {
      login(email, password);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Bem-vindo(a) à Taqtile!</Text>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        emailError={emailError}
        passwordError={passwordError}
        onSubmit={handleSubmit}
        disabled={loading}
      />
      <LoadingModal visible={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
});
