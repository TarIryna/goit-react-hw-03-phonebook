import React, { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  onChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', id: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.onSubmitForm}>
        <div className={s.labels}>
          <label className={s.name}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChangeInput}
            />
          </label>
          <label className={s.name}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.onChangeInput}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
        </div>
        <button className={s.button} type="submit" key="submitBtn">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
