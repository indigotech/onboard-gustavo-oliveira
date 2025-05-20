import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

interface MainInputProps {
  title: string;
  type: 'email-address' | 'password' | 'numeric' | 'default';
  value: string;
  placeholder?: string;
  error: string;
  onChange: (text: string) => void;
}

export const MainInput: React.FC<MainInputProps> = ({
  title,
  type,
  value,
  placeholder,
  error,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'password' ? 'default' : type}
        style={[styles.input, error ? styles.inputError : null]}
        autoCapitalize="none"
        placeholder={placeholder}
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
    fontSize: 12,
    fontWeight: 'regular',
    color: '#777',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    fontWeight: 'regular',
    marginTop: 8,
    fontSize: 12,
  },
});
