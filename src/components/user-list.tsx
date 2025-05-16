import React from 'react';
import {
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import {UserCard} from './user-card';
import {useUserList} from '../hooks/user-list.hook';
import {LoadingModal} from './loading-modal';

export const UserList: React.FC = () => {
  const {users, loading, error, loadMoreUsers} = useUserList();

  if (loading && users.length === 0) {
    return <LoadingModal visible={loading} />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Erro ao carregar usuários: {error.message}</Text>
      </View>
    );
  }

  if (users.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Nenhum usuário encontrado.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id}
      renderItem={({item}) => <UserCard name={item.name} email={item.email} />}
      onEndReached={loadMoreUsers}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loading ? (
          <ActivityIndicator
            style={styles.loading}
            size="small"
            color="#0000ff"
          />
        ) : null
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    marginVertical: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
