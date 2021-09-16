import React from 'react';
import PropTypes from 'prop-types';
import s from './Phonebook.module.css';

const Contact = ({ name, number, onClick }) => (
  <>
    {name}: <span className={s.number}> {number} </span>
    <button className={s.button} type="button" onClick={onClick}>
      Delete
    </button>
  </>
);

Contact.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};
export default Contact;
