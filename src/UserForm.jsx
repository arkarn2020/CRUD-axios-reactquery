import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex justify-evenly mb-5">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            {...register('fullName')}
          />
        </div>
        <div className="flex justify-evenly mb-5">
          <label>email</label>
          <input type="email" id="col1" name="col1" {...register('col1')} />
        </div>
        <div className="flex justify-evenly mb-5">
          <label>company</label>
          <input type="text" id="E" name="E" {...register('E')} />
        </div>
        <div className="flex justify-evenly">
          <button
            type="submit"
            className="border-2 border-green-500 bg-white px-3 text-green-500"
          >
            {isLoading ? 'submitting...' : 'submit'}
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
