import React from 'react'

const ContactsList = ({telContacts}) => {
    return (
        <ul>
    {telContacts.map(telContact => <li>{telContact.contacts}</li>) }      
    </ul>
      
    );
}

export default ContactsList;