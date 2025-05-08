import React from 'react';
import {TextInput, Text, View} from 'react-native';

interface MainInputProps {
  title: string;
}

export const MainInput: React.FC<MainInputProps> = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput />
    </View>
  );
};
