import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface FloatingButtonProps {
  onPress: () => void;
  icon: string;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#007AFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
