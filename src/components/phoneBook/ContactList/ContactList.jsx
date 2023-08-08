import React from 'react';
import PropTypes from 'prop-types';
import {
  Ul,
  ContInfo,
  ContactItems,
  ContactName,
  ContactNumber,
  ContBotton,
  Button,
} from '../stylesComponents/ContactListStyled';

function ContactItem({ contact, deleteContact }) {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <ContactItems>
      <ContInfo>
        <ContactName>{contact.name}</ContactName>
        <ContactNumber>{contact.number}</ContactNumber>
      </ContInfo>
      <ContBotton>
        <Button onClick={handleDelete}>delete</Button>
      </ContBotton>
    </ContactItems>
  );
}

function ContactList({ contacts, deleteContact }) {
  return (
    <Ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </Ul>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
