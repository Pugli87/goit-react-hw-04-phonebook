import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {
  Container,
  Title,
  Heading2,
} from './stylesComponents/Phonebook.styled';
import PropTypes from 'prop-types';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    addContact: PropTypes.func,
    deleteContact: PropTypes.func,
  };

  /* Método que se ejecuta después de que el componente ha sido montado */
  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  /* Método que se ejecuta cada vez que el componente se actualiza */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  setFilter = filterValue => {
    this.setState({
      filter: filterValue,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Title>phonebook</Title>
        <Container>
          <ContactForm addContact={this.addContact} contacts={contacts} />

          {contacts.length > 0 && (
            <>
              <Heading2>find contacts by name</Heading2>
              <Filter filter={filter} setFilter={this.setFilter} />
            </>
          )}
          <ContactList
            contacts={this.filteredContacts()}
            deleteContact={this.deleteContact}
          />
        </Container>
      </>
    );
  }
}

export default Phonebook;
