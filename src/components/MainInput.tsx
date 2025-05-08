import React from 'react';
import { TextInput, Text} from 'react-native';

interface MainInputProps {
    title: string;
  }

const MainInput: React.FC <MainInputProps> = ({title}) => {
  return (
    <>
      <Text>{title}</Text>
      <TextInput/>
    </>
  );
};

export default MainInput;