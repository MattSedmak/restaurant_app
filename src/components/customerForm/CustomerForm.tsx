import React, { ChangeEvent, FormEvent, useCallback } from 'react';
import { useState } from 'react';
import { ICustomerInfo } from '../../models/ICustomerInfo';
import { Link } from 'react-router-dom';

import {
  BookingDetail,
  Button,
  CancelBtn,
  FormContainer,
  Information,
  Input,
  StyledForm,
  StyledLabel,
  SummaryContainer,
} from './CustomerFormStyles';

const InitialValue: ICustomerInfo = {
  _id: 0,
  firstName: '',
  lastName: '',
  email: '',
  mobile: 0,
  information: '',
  seating: 0,
  guests: 0,
  date: '',
};

const useFormFields = (InitialValue: ICustomerInfo) => {
  const [formFields, setFormFields] = useState<ICustomerInfo>(InitialValue);

  const createChangeHandler =
    (key: keyof ICustomerInfo) =>
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setFormFields((prev: ICustomerInfo) => ({ ...prev, [key]: value }));
    };

  return { formFields, createChangeHandler };
};

interface IOnCustomerProps {
  onCustomerHandler: (info: ICustomerInfo) => void;
  guest: number;
  date: string;
  seating: number;
}

export const CustomerForm = (props: IOnCustomerProps) => {
  const { formFields, createChangeHandler } = useFormFields({
    _id: 0,
    firstName: '',
    lastName: '',
    email: '',
    mobile: 0,
    information: '',
    seating: 0,
    guests: 0,
    date: '',
  });

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onCustomerHandler(formFields);
  };

  const onCancel = () => {
    window.location.reload();
  };

  return (
    <FormContainer>
      <SummaryContainer>
        <BookingDetail>
          <label>Datum</label>
          <strong>{props.date}</strong>
        </BookingDetail>
        <BookingDetail>
          <label>Gäster</label>
          <strong>{props.guest}</strong>
        </BookingDetail>
        <BookingDetail>
          <label>Tid</label>
          <strong>{props.seating}:00</strong>
        </BookingDetail>
        <CancelBtn onClick={onCancel}>Ångra</CancelBtn>
      </SummaryContainer>

      <h3>Kontaktuppgifter</h3>

      <StyledForm onSubmit={handelSubmit}>
        <StyledLabel>Förrnamn:</StyledLabel>
        <Input
          type='text'
          id='firstName'
          value={formFields.firstName}
          onChange={createChangeHandler('firstName')}
          placeholder='Ditt Förrnamn'
          required
        />
        <StyledLabel>Efternamn:</StyledLabel>
        <Input
          type='text'
          id='lastName'
          value={formFields.lastName}
          onChange={createChangeHandler('lastName')}
          placeholder='Ditt Efternamn'
          required
        />
        <StyledLabel>E-post:</StyledLabel>
        <Input
          type='email'
          id='email'
          value={formFields.email}
          onChange={createChangeHandler('email')}
          placeholder='E-post'
          required
        />
        <StyledLabel>Telefon:</StyledLabel>
        <Input
          type='tel'
          id='mobile'
          value={formFields.mobile}
          onChange={createChangeHandler('mobile')}
          pattern='[0-9]{10}'
          placeholder='0712345678'
          required
        />
        <StyledLabel>Meddelande:</StyledLabel>
        <Information
          id='info'
          value={formFields.information}
          onChange={createChangeHandler('information')}
          placeholder='Ditt Meddelande här...'
          rows={3}
          maxLength={100}
        />
        <Button type='submit'>Boka</Button>
      </StyledForm>
    </FormContainer>
  );
};

export default CustomerForm;
