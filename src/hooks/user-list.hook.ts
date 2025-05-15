import {useState} from 'react';
import {useQuery, gql} from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers($data: PageInput!) {
    users(data: $data) {
      nodes {
        id
        name
        email
      }
      count
      pageInfo {
        hasNextPage
      }
    }
  }
`;

type User = {
  id: string;
  name: string;
  email: string;
};

export const useUserList = (limit = 20) => {
  const [offset, setOffset] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  console.log(JSON.stringify(users));
  console.log('--------------------');

  const {loading, error, data} = useQuery(GET_USERS, {
    variables: {data: {offset, limit}},
    notifyOnNetworkStatusChange: true,
    onCompleted: fetchedData => {
      if (fetchedData?.users?.nodes) {
        setUsers(prevUsers => {
          return [...prevUsers, ...fetchedData.users.nodes];
        });
      }
    },
  });

  const loadMoreUsers = async () => {
    if (!data?.users.pageInfo.hasNextPage) {
      console.info(
        'Nenhum usuário adicional para carregar ou já está carregando.',
      );
      return;
    }

    console.info('Carregando mais usuários...');
    setOffset(offset + limit);
  };

  return {
    users,
    loading,
    error,
    loadMoreUsers,
  };
};
