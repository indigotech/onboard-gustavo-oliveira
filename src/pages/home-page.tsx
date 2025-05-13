import React from 'react';
import {View} from 'react-native';
import {UserList} from '../components/user-list';

export const HomePage: React.FC = () => {
  return (
    <View>
      <UserList />
    </View>
  );
};
