import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import { v4 as uuidv4 } from "uuid";
import TelContactFilter from "./telContactFilter/TelContactFilter";


class TellContacts extends Component {
  state = {
    telContacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
     filter: ""
  };
  addTelContact = telContact => {
      const searchSameName = this.state.telContacts
      .map((telContacts) => telContacts.name)
      .includes(telContact.name);

    if (searchSameName) {
     return alert(`${telContact.name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        telContacts: [...prevState.telContacts, {...telContact, id: uuidv4()}],
      }
    })
  };



deleteTelContact = event => {
    const { id } = event.target;
    this.setState({
      telContacts: this.state.telContacts.filter(telContact => telContact.id !== id)
    });
  };
    setFilter = (e) => {
        const { value } = e.target
        this.setState({
            filter: value
        })
    }
getFilterTelContact = () => {
    return this.state.telContacts.filter(telContact=>telContact.name.toLowerCase().includes(this.state.filter.toLowerCase()))} 


  render() {
    return (
        <>
        <h2>Phonebook</h2>
        <ContactsForm addTelContact={this.addTelContact} />
        <h2>Contacts</h2>
         <TelContactFilter filter={this.state.filter} setFilter={this.setFilter}/>
       
        <ContactsList telNumbers={this.getFilterTelContact()} deleteTelContact={this.deleteTelContact}/>
      </>
    );
  }
}

export default TellContacts;
