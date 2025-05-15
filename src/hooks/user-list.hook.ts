import {useState} from 'react';
import {useQuery, gql} from '@apollo/client';

const GET_USERS = gql`
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

interface User {
  id: string;
  name: string;
  email: string;
}

export const useUserList = (limit = 20) => {
  const [offset, setOffset] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const {loading, error, data, fetchMore} = useQuery(GET_USERS, {
    variables: {data: {offset: 0, limit}},
    notifyOnNetworkStatusChange: true,
    onCompleted: fetchedData => {
      if (fetchedData?.users?.nodes) {
        addUniqueUsers(fetchedData.users.nodes);
      }
    },
  });

  const addUniqueUsers = (newUsers: User[]) => {
    setUsers(prevUsers => {
      const uniqueUsers = newUsers.filter(
        newUser => !prevUsers.some(user => user.id === newUser.id),
      );
      return [...prevUsers, ...uniqueUsers];
    });
  };

  const loadMoreUsers = async () => {
    if (isFetchingMore || !data?.users.pageInfo.hasNextPage) {
      console.info(
        'Nenhum usuário adicional para carregar ou já está carregando.',
      );
      return;
    }

    console.info('Carregando mais usuários...');
    setIsFetchingMore(true);

    try {
      const {data: fetchMoreResult} = await fetchMore({
        variables: {data: {offset: offset + limit, limit}},
      });

      if (fetchMoreResult?.users?.nodes) {
        addUniqueUsers(fetchMoreResult.users.nodes);
        setOffset(prevOffset => prevOffset + limit);
      }
    } catch (fetchError) {
      console.error('Erro ao carregar mais usuários:', fetchError);
    } finally {
      setIsFetchingMore(false);
    }
  };

  return {
    users,
    loading,
    error,
    isFetchingMore,
    loadMoreUsers,
  };
};
