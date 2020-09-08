import React from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  padding: 15px;
  margin: 0 auto;
`;

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContactsInLS = localStorage.getItem('contacts');
    if (savedContactsInLS) {
      this.setState({
        contacts: JSON.parse(savedContactsInLS),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  addContact = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  onChangeFilter = filter => {
    this.setState({ filter });
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact}></ContactForm>
          <h2>Contacts</h2>
          {contacts.length > 0 ? (
            <Filter value={filter} onChangeFilter={this.onChangeFilter} />
          ) : (
            <p>You have no contacts yet</p>
          )}
          <ContactsList
            contacts={filteredContacts}
            onRemoveContact={this.removeContact}
          ></ContactsList>
        </Container>
      </>
    );
  }
}
