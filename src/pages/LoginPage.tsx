import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainButton from '../components/MainButton';
import MainInput from '../components/MainInput';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a) à Taqtile!</Text>
      <MainInput title='E-mail'/> 
      <MainInput title='Senha'/> 
      <MainButton title="Entrar"/>
    </View>
  );
};

export default HomeScreen;

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