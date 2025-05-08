import React from 'react';
import { Button } from 'react-native';

interface MainButtonProps {
    title: string;
  }

const MainButton: React.FC <MainButtonProps> = ({title}) => {
  return (
    <>
      <Button title={title}/>
    </>
  );
};

export default MainButton;