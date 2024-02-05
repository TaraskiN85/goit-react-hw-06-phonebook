import { useDispatch, useSelector } from "react-redux";

import { PhonebookForm } from "./Form.jsx/PhonebookForm";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { addContact, deleteContact, filterContacts } from "../redux/contacts/contactsSlice";

import css from './App.module.css';

export const App = () => {

  const contacts = useSelector(state => state.contactsData.contacts)
  const filter = useSelector(state => state.contactsData.filter)
  
  const dispatch = useDispatch();

  const addUser = (formData => {
    const isDuplicate = contacts.some(contact => contact.name === formData.name)
    
    if (isDuplicate) {
      alert(`${formData.name} is already in contacts.`)
      return
    }
   
    dispatch(addContact(formData));
  })

  const handleSearch = searchData => dispatch(filterContacts(searchData));

  const handleDelete = name => dispatch(deleteContact(name))

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter)
  })

  return (
    <div className={css.phonebook}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <PhonebookForm addUser={addUser} />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter
        value={filter}
        dataSearch={handleSearch}
      />
      <Contacts contacts={filteredContacts} deleteContact={handleDelete} />
    </div>
  )
}
