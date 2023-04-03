import React, { useEffect, useRef, useState } from 'react';
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
  const [contacts, setContacts]=useState([...contactsList])
  const firstRender = useRef(true)


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

  function getVisibleContacts() {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  useEffect(()=>{
    const contactsLS = JSON.parse(localStorage.getItem('contacts'))
    if (contactsLS) {setContacts(contactsLS)}
  },[])
  
  useEffect(()=> {
    if(firstRender.current)
  {firstRender.current=false
  return}  
  localStorage.setItem ('contacts', JSON.stringify(contacts))},[contacts])
  
  return (
    <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <FilterTitle>Find contacts by name</FilterTitle>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length ? (
          <ContactList
            contacts={getVisibleContacts()} onDelete={deleteContacts}
          />
        ) : (
          <p>No any contacts</p>
        )}
      </Container>
    );
        }

/*class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }



  handleSubmit = data => {
    const equalName = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (equalName) return alert(equalName.name + ' is already in contacts.');

    data.id = nanoid();
    this.setState(prev => ({ contacts: [data, ...prev.contacts] }));
  };

  changeFilter = e => {
    // e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleSubmit} />
        <ContactsTitle>Contacts</ContactsTitle>
        <FilterTitle>Find contacts by name</FilterTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts.length ? (
          <ContactList
            contacts={this.getVisibleContacts()}
            onDelete={this.deleteContacts}
          />
        ) : (
          <p>No any contacts</p>
        )}
      </Container>
    );
  }
}
*/
