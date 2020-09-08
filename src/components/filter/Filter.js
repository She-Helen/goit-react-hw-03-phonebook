import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export function Filter({ value, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <Input
        name="filter"
        type="text"
        value={value}
        onChange={event => onChangeFilter(event.target.value)}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
