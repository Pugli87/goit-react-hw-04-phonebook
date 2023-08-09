import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import {
  Form,
  Input,
  Button,
  Text,
  SubTitle,
} from '../stylesComponents/ContactFormStyled';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name "${name}" already exists!`,
        'Ok'
      );
      return;
    }

    const newContact = {
      id: nanoid(6),
      name: name.trim(),
      number: number.trim(),
    };

    addContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SubTitle>Form of contacts</SubTitle>
      <Text>name</Text>
      <Input
        type="text"
        name="name"
        pattern="/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <Text>number</Text>
      <Input
        type="tel"
        name="number"
        pattern="/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter your number"
      />
      <Button type="submit">add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactForm;
