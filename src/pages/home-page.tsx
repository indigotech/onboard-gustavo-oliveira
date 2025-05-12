import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomePage: React.FC<HomePageProps> = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Voltar para Login!"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
});
