import React from 'react';
import Contact from './Contact';
import s from './Phonebook.module.css';

const Phonebook = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.name} key={id}>
          <Contact name={name} number={number} onClick={() => onDelete(id)} />
        </li>
      ))}
    </ul>
  );
};
export default Phonebook;
