import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LoginForm} from '../components/login-form';
import {LoadingModal} from '../components/loading-modal';
import {useLoginForm} from '../hooks/login-form.hook';
import {useLogin} from '../hooks/login.hook';

export const LoginPage: React.FC = () => {
  const loginForm = useLoginForm();
  const {login, loading} = useLogin();

  const handleSubmit = () => {
    if (loginForm.validateFields()) {
      login(loginForm.email, loginForm.password);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Bem-vindo(a) à Taqtile!</Text>
      <LoginForm
        email={loginForm.email}
        setEmail={loginForm.setEmail}
        password={loginForm.password}
        setPassword={loginForm.setPassword}
        emailError={loginForm.emailError}
        passwordError={loginForm.passwordError}
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
