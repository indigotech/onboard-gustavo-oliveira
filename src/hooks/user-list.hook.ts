import {useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_USERS} from './gql.hook';

interface User {
  id: string;
  name: string;
  email: string;
}

export const useUserList = (limit = 20) => {
  const [offset, setOffset] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

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
      return;
    }

    setOffset(offset + limit);
  };

  return {
    users,
    loading,
    error,
    loadMoreUsers,
  };
};
