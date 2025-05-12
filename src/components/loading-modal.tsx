import React from 'react';
import {Modal, View, ActivityIndicator, StyleSheet} from 'react-native';

interface LoadingModalProps {
  visible: boolean;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({visible}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
