import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({title}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
