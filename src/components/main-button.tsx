// MainButton.tsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface MainButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

<<<<<<< HEAD
export const MainButton: React.FC<MainButtonProps> = props => {
  const {title, onPress, disabled} = props;

  return (
    <View>
      <Button title={title} onPress={onPress} disabled={disabled} />
    </View>
=======
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
>>>>>>> 011123e (Loading when submit)
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: '#A9A9A9',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
