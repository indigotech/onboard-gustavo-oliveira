import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {MainButton} from '../components/main-button';
import {MainInput} from '../components/main-input';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (text: string) => {
    if (!text.trim()) return 'Campo obrigatório';
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    if (!emailRegex.test(text))
      return 'E-mail inválido (deve terminar com .com)';
    return '';
  };

  const validatePassword = (text: string) => {
    if (!text.trim()) return 'Campo obrigatório';
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/;
    if (!passwordRegex.test(text)) {
      return 'A senha deve ter pelo menos 7 caracteres, com letras e números';
    }
    return '';
  };

  const handleSubmit = () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (!emailValidation && !passwordValidation) {
      Alert.alert('Login válido!', 'Tudo certo para continuar.');
    }
  };

  return (
    <View>
      <Text style={styles.title}>Bem-vindo(a) à Taqtile!</Text>
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
      <MainButton title="Entrar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
});
