import React from 'react';
import PropTypes from 'prop-types';

import { ContactsItem } from '../contactsItem/ContactsItem';
import styled from 'styled-components';

const Ul = styled.ul`
  margin: -10px;
`;

export function ContactsList({ contacts, onRemoveContact }) {
  return (
    <Ul>
      {contacts.map(el => (
        <ContactsItem
          key={el.id}
          contact={el}
          onRemoveContact={onRemoveContact}
        ></ContactsItem>
      ))}
    </Ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
