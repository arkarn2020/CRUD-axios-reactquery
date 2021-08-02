import axios from 'axios';
import React from 'react';
import UserForm from './UserForm';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

const addUserItem = async (data) => {
  await axios
    .post(`https://retoolapi.dev/MWXN5G/data`, data)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const AddUser = () => {
  const history = useHistory();
  const { mutateAsync, isLoading } = useMutation(addUserItem);

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    history.push('/');
  };

  return (
    <div className="max-w-3xl mx-auto bg-green-100 m-5 p-5">
      <UserForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
    </div>
  );
};

export default AddUser;
