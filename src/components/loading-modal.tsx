import React from 'react';
import {Modal, ActivityIndicator, View, StyleSheet} from 'react-native';

interface LoadingModalProps {
  visible: boolean;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({visible}) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
