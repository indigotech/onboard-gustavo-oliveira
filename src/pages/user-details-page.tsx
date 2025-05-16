import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {useUserDetails} from '../hooks/user-details.hook';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';
import {LoadingModal} from '../components/loading-modal';

interface UserDetailsRouteProp
  extends RouteProp<RootStackParamList, 'UserDetails'> {
  params: {
    id: string;
  };
}

export const UserDetailsPage: React.FC<{route: UserDetailsRouteProp}> = ({
  route,
}) => {
  const {id} = route.params;
  const {user, loading, error} = useUserDetails(Number(id));

  if (loading) {
    return <LoadingModal visible={loading} />;
  }

  if (error) {
    Alert.alert(
      'Erro',
      error.message || 'Erro ao carregar os detalhes do usuário',
    );
    return (
      <View style={styles.center}>
        <Text>Erro ao carregar os detalhes do usuário.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Usuário</Text>
      <Text style={styles.label}>Nome: {user.name}</Text>
      <Text style={styles.label}>E-mail: {user.email}</Text>
      <Text style={styles.label}>Telefone: {user.phone}</Text>
      <Text style={styles.label}>Data de Nascimento: {user.birthDate}</Text>
      <Text style={styles.label}>Função: {user.role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
});
