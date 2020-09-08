import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Form = styled.form`
  border: 1px solid;
  padding: 15px;
  margin: 0 auto;
`;

const Input = styled.input`
  display: block;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    this.props.onAddContact(contact);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmitForm}>
          <label>
            Name
            <Input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Number
            <Input
              name="number"
              type="text"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
