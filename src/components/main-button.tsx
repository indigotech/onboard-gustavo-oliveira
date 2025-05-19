import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface MainButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const MainButton: React.FC<MainButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    height: 44,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: '#A9A9A9',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
