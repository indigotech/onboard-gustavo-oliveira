import React from 'react';
import {Button, View} from 'react-native';

interface MainButtonProps {
  title: string;
  onPress: () => void;
}

export const MainButton: React.FC<MainButtonProps> = ({title, onPress}) => {
  return (
    <View>
      <Button title={title} onPress={onPress} />
    </View>
  );
};
