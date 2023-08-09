import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, Heading2 } from './stylesComponents/PhonebookStyled';
import PropTypes from 'prop-types';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const updateLocalStorage = contacts => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const addContact = newContact => {
    setContacts(prevContacts => {
      const newContacts = [...prevContacts, newContact];

      updateLocalStorage(newContacts);
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = id => {
    setContacts(prevContacts => {
      const delContact = prevContacts.filter(contact => contact.id !== id);
      updateLocalStorage(delContact);
      return delContact;
    });
  };

  const setFilterValue = filterValue => {
    setFilter(filterValue);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  return (
    <>
      <Title>phonebook</Title>
      <Container>
        <ContactForm addContact={addContact} contacts={contacts} />

        {contacts.length > 0 && (
          <>
            <Heading2>find contacts by name</Heading2>
            <Filter filter={filter} setFilter={setFilterValue} />
          </>
        )}
        <ContactList
          contacts={filteredContacts()}
          deleteContact={deleteContact}
        />
      </Container>
    </>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  addContact: PropTypes.func,
  deleteContact: PropTypes.func,
};
