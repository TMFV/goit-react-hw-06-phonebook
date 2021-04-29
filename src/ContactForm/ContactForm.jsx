import style from './ContactForm.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    /*     console.log(event.currentTarget);
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value); */
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    //this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  /*   inputNameEvent = event => {
    this.setState({ curName: event.currentTarget.value });
  };
  inputTelEvent = event => {
    this.setState({ curTel: event.currentTarget.value });
  }; */

  handleSubmit = event => {
    event.preventDefault();
    let contactForAdd = { name: this.state.name, number: this.state.number };
    //console.log(this.state);
    this.props.onSubmitData(contactForAdd);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div className={style.contactform}>
        <form type="submit" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
export default ContactForm;
