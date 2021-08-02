import axios from 'axios';
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import UserForm from './UserForm';

// fetch user by ID
const getUser = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  return await axios
    .get(`https://retoolapi.dev/MWXN5G/data/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
};

// update user by ID
const updateUser = async ({ id, ...data }) => {
  return axios
    .put(`https://retoolapi.dev/MWXN5G/data/${id}`, data)
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
};

const UpdateUser = () => {
  const { id } = useParams();
  const history = useHistory();

  // fetch user data by ID
  const { data, error, isLoading, isError } = useQuery(
    ['users', { id }],
    getUser
  );

  // update userdata by ID
  const { mutateAsync, isLoading: isMutating } = useMutation(updateUser);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });
    history.push('/');
  };

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error : {error.message}</p>;

  return (
    <>
      <div className="max-w-3xl mx-auto bg-green-100 m-5 p-5">
        <UserForm
          defaultValues={data}
          onFormSubmit={onFormSubmit}
          isLoading={isMutating}
        />
      </div>
    </>
  );
};

export default UpdateUser;
