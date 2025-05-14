import {useMutation, gql} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {useState} from 'react';
import {RootStackParamList} from '../types/navigation';

const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      user {
        name
        email
      }
      token
    }
  }
`;

export const useLogin = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const {data} = await loginMutation({
        variables: {data: {email, password}},
      });

      if (data?.login?.token) {
        await AsyncStorage.setItem('authToken', data.login.token);
        navigation.navigate('Home');
      }
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Ocorreu um erro');
    } finally {
      setLoading(false);
    }
  };

  return {login, loading};
};
