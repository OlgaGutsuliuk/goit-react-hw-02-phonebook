import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsForm/contactsList/ContactsList";

class TellContacts extends Component {
  state = { telContacts: [] };
  addTelContact = (telContact) => {
    this.setState(prevState => {
      return {
        telContacts: [...prevState.telContacts, telContact],
      }
    })
  };
  render() {
    return (
        <>
            <h2>Phone book</h2>
        <ContactsForm addTelContact={this.addTelContact} />
        <ContactsList addTelContact={this.state.addTelContacts} />
      </>
    );
  }
}

export default TellContacts;
