import {useQuery} from '@apollo/client';
import {GET_USER_DETAILS} from './gql.hook';

export const useUserDetails = (id: number) => {
  const {data, loading, error} = useQuery(GET_USER_DETAILS, {
    variables: {id},
  });

  return {
    user: data?.user,
    loading,
    error,
  };
};
