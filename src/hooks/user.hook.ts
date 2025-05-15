import {useMutation, gql} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {Alert} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import {GET_USERS} from './user-list.hook';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      id
      name
      email
      phone
      birthDate
      role
    }
  }
`;

export const useCreateUser = () => {
  const [createUserMutation] = useMutation(CREATE_USER_MUTATION, {
    refetchQueries: [GET_USERS],
  });
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const createUser = async (
    name: string,
    email: string,
    phone: string,
    birthDate: string,
    role: string,
    password: string,
  ) => {
    try {
      const [day, month, year] = birthDate.split('/');
      const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(
        day,
      ).padStart(2, '0')}`;

      console.log('Dados enviados:', {
        name,
        email,
        phone,
        birthDate: formattedDate,
        role,
        password,
      });

      const {data} = await createUserMutation({
        variables: {
          data: {name, email, phone, birthDate: formattedDate, role, password},
        },
      });

      if (data?.createUser) {
        Alert.alert('Sucesso', 'Usuário criado com sucesso!');
        navigation.goBack();
      }
    } catch (error: any) {
      console.error('Erro ao criar usuário:', error);
      Alert.alert(
        'Erro',
        error.message || 'Ocorreu um erro ao criar o usuário',
      );
    }
  };

  return {createUser};
};
