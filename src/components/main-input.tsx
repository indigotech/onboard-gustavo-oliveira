import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

interface MainInputProps {
  title: string;
  type: 'email' | 'password';
}

export const MainInput: React.FC<MainInputProps> = ({title, type}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validate = (text: string) => {
    if (!text) {
      return 'Campo obrigatório';
    }

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
      if (!emailRegex.test(text)) {
        return 'E-mail inválido (deve terminar com .com)';
      }
    }

    if (type === 'password') {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/;
      if (!passwordRegex.test(text)) {
        return 'A senha deve ter pelo menos 7 caracteres, com letras e números';
      }
    }

    return '';
  };

  const handleChange = (text: string) => {
    setValue(text);
    const validationError = validate(text);
    setError(validationError);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={handleChange}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        style={[styles.input, error ? styles.inputError : null]}
        autoCapitalize="none"
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 14,
  },
});
