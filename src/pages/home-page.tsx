import React from 'react';
import {View, StyleSheet} from 'react-native';
import {UserList} from '../components/user-list';
import {PageTitle} from '../components/page-title';
import {FloatingButton} from '../components/floating-button';

export const HomePage: React.FC<{navigation: any}> = ({navigation}) => {
  const handleAddUser = () => {
    navigation.navigate('User');
  };

  return (
    <View style={styles.container}>
      <PageTitle title="Lista de Usuários" />
      <UserList />
      <FloatingButton onPress={handleAddUser} icon="+" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
