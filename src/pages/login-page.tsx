import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MainButton} from '../components/main-button';
import {MainInput} from '../components/main-input';

export const LoginPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a) à Taqtile!</Text>
      <MainInput title="E-mail" />
      <MainInput title="Senha" />
      <MainButton title="Entrar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
