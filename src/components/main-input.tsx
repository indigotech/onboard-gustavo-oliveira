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
