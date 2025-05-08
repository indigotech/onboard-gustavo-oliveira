import React from 'react';
import {Button, View} from 'react-native';

interface MainButtonProps {
  title: string;
}

export const MainButton: React.FC<MainButtonProps> = ({title}) => {
  return (
    <View>
      <Button title={title} />
    </View>
  );
};
