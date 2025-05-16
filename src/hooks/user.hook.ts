import {useMutation, gql} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {Alert} from 'react-native';
import {RootStackParamList} from '../types/navigation';

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

interface User {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  role: string;
  password: string;
}

export const useCreateUser = () => {
  const [createUserMutation] = useMutation(CREATE_USER_MUTATION);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const createUser = async (user: User) => {
    try {
      const {birthDate, ...userWithoutBirthDate} = user;

      const [day, month, year] = birthDate.split('/');
      const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(
        day,
      ).padStart(2, '0')}`;

      const {data} = await createUserMutation({
        variables: {
          data: {...userWithoutBirthDate, birthDate: formattedDate},
        },
      });

      if (data?.createUser) {
        Alert.alert('Sucesso', 'Usuário criado com sucesso!');
        navigation.goBack();
      }
    } catch (error: any) {
      Alert.alert(
        'Erro',
        error.message || 'Ocorreu um erro ao criar o usuário',
      );
    }
  };

  return {createUser};
};
