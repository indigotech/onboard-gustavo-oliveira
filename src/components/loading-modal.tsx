import React from 'react';
<<<<<<< HEAD
import {Modal, ActivityIndicator, View, StyleSheet} from 'react-native';
=======
import {Modal, View, ActivityIndicator, StyleSheet} from 'react-native';
>>>>>>> 011123e (Loading when submit)

interface LoadingModalProps {
  visible: boolean;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({visible}) => {
  return (
<<<<<<< HEAD
    <Modal transparent visible={visible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
=======
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#fff" />
>>>>>>> 011123e (Loading when submit)
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
=======
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
>>>>>>> 011123e (Loading when submit)
  },
});
