import React, { Component } from 'react';
import Notiflix from 'notiflix';
import Form from './components/Form';
import Container from './components/Container';
import Phonebook from './components/Phonebook';
import FilterInput from './components/FilterInput';
import shortid from 'shortid';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const inputNameId = shortid.generate();
    data.id = inputNameId;
    const contactList = this.state.contacts;
    const findName = contactList.find(contact => contact.name === data.name);
    if (findName) {
      Notiflix.Notify.failure(`${findName.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1> Phonebook </h1> <Form onSubmit={this.addContact} /> <h2> Contacts </h2>{' '}
        <FilterInput filter={this.state.filter} onChange={this.changeFilter} />{' '}
        <Phonebook contacts={visibleContacts} onDelete={this.deleteContact} />{' '}
      </Container>
    );
  }
}

export default App;
