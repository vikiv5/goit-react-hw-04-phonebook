import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactsTitle, Container, FilterTitle, Title } from './App.styled';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';



const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]

 export default function App () {
  const [filter, setFilter]= useState ('')
  const [contacts, setContacts] = useState( () => JSON.parse(window.localStorage.getItem("contacts")) ?? contactsList);
  
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number)=> {
    const data = {
      id: nanoid(),
      name,
      number,
    }
    
    if (contacts.find(obj =>obj.name === name)) {
      alert.error(`Name ${name} is already in contacts!`)
      return;}
    
    setContacts([data, ...contacts])
    alert.success(`${name} was added to contacts!`)
  }
  

  
  const deleteContacts = (id) => {
    setContacts(()=>(contacts.filter(contact => contact.id !== id)))}

  
  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts=()=> {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  const resetFilter = () => {
    setFilter('');
  };
 
  return (
    <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <FilterTitle>Find contacts by name</FilterTitle>
        <Filter value={filter} onChange={changeFilter} onClick={resetFilter}/>
        {contacts.length ? (
          <ContactList
            contacts={getVisibleContacts()} onDelete={deleteContacts}
          />
        ) : (
          <p>No contacts</p>
        )}
      </Container>
    );
        }

