import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import UserItem from './UserItem';

const fetchUsers = async () => {
  return await axios
    .get('https://retoolapi.dev/MWXN5G/data')
    .then((res) => res.data)
    .catch((err) => err.message);
};

const UsersList = () => {
  const { isLoading, isError, data, error } = useQuery('users', fetchUsers);

  if (isLoading) return <p>loading...</p>;

  if (isError) return <p>something went wrong {error.message}...</p>;

  return (
    <>
      {data.map((u) => (
        <UserItem
          key={u.id}
          id={u.id}
          name={u.fullName}
          rating={u.rating}
          email={u.col1}
          company={u.E}
        />
      ))}
    </>
  );
};

export default UsersList;
