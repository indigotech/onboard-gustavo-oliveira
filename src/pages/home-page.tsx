import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const HomePage: React.FC<{navigation: any}> = () => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
});
