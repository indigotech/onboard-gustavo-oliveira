import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const mockUsers = [
  {id: '1', name: 'Maria Silva', email: 'maria@exemplo.com'},
  {id: '2', name: 'João Souza', email: 'joao@exemplo.com'},
  {id: '3', name: 'Ana Lima', email: 'ana@exemplo.com'},
];

export const UserList: React.FC<{}> = () => {
  return (
    <View>
      <Text style={styles.title}>Lista de Usuários</Text>
      <FlatList
        data={mockUsers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>
              {item.name} - {item.email}
            </Text>
          </View>
        )}
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
