import React from 'react';
import { useQueryClient, useMutation } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const deleteUser = async (id) => {
  return await axios
    .delete(`https://retoolapi.dev/MWXN5G/data/${id}`)
    .then(() => console.log(true))
    .catch((err) => err.message);
};

const UserItem = ({ id, name, rating, email, company }) => {
  const qclient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(deleteUser);

  const removeUser = async () => {
    await mutateAsync(id);
    qclient.invalidateQueries('users');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="m-5 p-5 bg-green-100 flex justify-between">
        <div>
          <Link to={`/update/${id}`}>
            <p className="text-lg hover:text-green-400">{name}</p>
          </Link>
          <p>{email}</p>
          <p>{company}</p>
          <p>{rating}</p>
        </div>
        <div>
          {isLoading ? (
            'removing...'
          ) : (
            <p
              className="cursor-pointer bg-gray-50 px-2 rounded-2xl text-red-700"
              onClick={removeUser}
            >
              remove
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
