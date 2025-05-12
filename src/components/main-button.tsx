import React from 'react';
import {Button, View} from 'react-native';

interface MainButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const MainButton: React.FC<MainButtonProps> = props => {
  const {title, onPress, disabled} = props;

  return (
    <View>
      <Button title={title} onPress={onPress} disabled={disabled} />
    </View>
  );
};
