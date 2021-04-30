import React, { Component } from "react";

class ContactsForm extends Component {
  state = {
    contacts: [],
    name: ""
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.addTelContact(this.state);
    this.setState({
      contacts: [],
      name: ""
    })
  };
    
    onHandleChange = e => {
    const { name, value } = e.target;
      this.setState({[name]: value})
    }
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
         onChange={this.onHandleChange} value={this.state.name}  />
        </label>
        <label>
          contacts: <input name="contacts" type="text" onChange={this.onHandleChange} value={this.state.contacts} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
