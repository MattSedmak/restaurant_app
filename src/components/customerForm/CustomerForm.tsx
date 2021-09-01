import React, { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { ICustomerInfo } from '../../models/ICustomerInfo';

const InitialValue: ICustomerInfo = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: 0,
  information: '',
};

const useFormFields = (InitialValue: ICustomerInfo) => {
  const [formFields, setFormFields] = useState<ICustomerInfo>(InitialValue);

  const createChangeHandler =
    (key: keyof ICustomerInfo) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormFields((prev: ICustomerInfo) => ({ ...prev, [key]: value }));
    };

  return { formFields, createChangeHandler };
};

interface IOnCustomerProps {
  onCustomerHandler: (info: ICustomerInfo) => void;
}

export const CustomerForm = (props: IOnCustomerProps) => {
  const { formFields, createChangeHandler } = useFormFields({
    firstName: '',
    lastName: '',
    email: '',
    mobile: 0,
    information: '',
  });

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onCustomerHandler(formFields);
  };

  return (
    <div>
      <h1>Customer Form</h1>
      <form onSubmit={handelSubmit}>
        <input
          type='text'
          id='firstName'
          value={formFields.firstName}
          onChange={createChangeHandler('firstName')}
          placeholder='First name'
        />
        <input
          type='text'
          id='lastName'
          value={formFields.lastName}
          onChange={createChangeHandler('lastName')}
          placeholder='Last name'
        />
        <input
          type='email'
          id='email'
          value={formFields.email}
          onChange={createChangeHandler('email')}
          placeholder='Email'
        />
        <input
          type='tel'
          id='mobile'
          value={formFields.mobile}
          onChange={createChangeHandler('mobile')}
          placeholder='Mobile'
        />
        <input
          type='text'
          id='info'
          value={formFields.information}
          onChange={createChangeHandler('information')}
          placeholder='Info'
        />
        <button type='submit'>Book</button>
      </form>
    </div>
  );
};

export default CustomerForm;
