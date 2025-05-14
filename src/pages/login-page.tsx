<<<<<<< HEAD
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LoginForm} from '../components/login-form';
import {LoadingModal} from '../components/loading-modal';
import {useLoginForm} from '../hooks/login-form.hook';
import {useLogin} from '../hooks/login.hook';
=======
import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {MainButton} from '../components/main-button';
import {MainInput} from '../components/main-input';
import {gql, useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoadingModal} from '../components/loading-modal';
>>>>>>> 011123e (Loading when submit)

export const LoginPage: React.FC = () => {
  const loginForm = useLoginForm();
  const {login, loading} = useLogin();

<<<<<<< HEAD
  const handleSubmit = () => {
    if (loginForm.validateFields()) {
      login(loginForm.email, loginForm.password);
=======
export const LoginPage: React.FC<{navigation: any}> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/;
  const [loading, setLoading] = useState(false);

  const [login] = useMutation(LOGIN_MUTATION);

  const validateEmail = (text: string) => {
    if (!text.trim()) {
      return 'Campo obrigatório';
    }
    if (!EMAIL_REGEX.test(text)) {
      return 'E-mail com formato inválido';
    }
    return '';
  };

  const validatePassword = (text: string) => {
    if (!text.trim()) {
      return 'Campo obrigatório';
    }
    if (!PASSWORD_REGEX.test(text)) {
      return 'A senha deve ter pelo menos 7 caracteres, com letras e números';
    }
    return '';
  };

  const handleSubmit = async () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (!emailValidation && !passwordValidation) {
      setLoading(true);
      try {
        const {data} = await login({
          variables: {
            data: {email, password},
          },
        });

        if (data?.login?.token) {
          await AsyncStorage.setItem('authToken', data.login.token);
          navigation.navigate('Home');
        }
      } catch (error: any) {
        Alert.alert('Erro', error.message || 'Ocorreu um erro');
      } finally {
        setLoading(false);
      }
>>>>>>> 011123e (Loading when submit)
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
<<<<<<< HEAD
=======
      <MainInput
        title="Senha"
        type="password"
        value={password}
        onChange={setPassword}
        error={passwordError}
      />
      <MainButton title="Entrar" onPress={handleSubmit} disabled={loading} />
>>>>>>> 011123e (Loading when submit)
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
