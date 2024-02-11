import { PhonebookForm } from "./Form.jsx/PhonebookForm";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";

import css from './App.module.css';

export const App = () => {

  return (
    <div className={css.phonebook}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <PhonebookForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  )
}
