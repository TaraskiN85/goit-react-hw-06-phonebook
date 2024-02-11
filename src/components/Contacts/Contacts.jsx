import { useDispatch, useSelector } from 'react-redux'

import { deleteContact } from '../../redux/contacts/contactsSlice'
import { selectFilteredContacts } from '../../redux/contacts/contactsSlice.selectors'

import css from './Contacts.module.css'

export const Contacts = () => {
  const dispatch = useDispatch()
  const filteredContacts = useSelector(selectFilteredContacts)

  const handleDeleteContact = (e) => {
    const name = e.currentTarget.name
    dispatch(deleteContact(name))
  }

  return (
    <div className={css.contacts}>
      <ul className={css.contactsList}>
        {filteredContacts.map(contact => {
          return <li key={contact.id} >
            <div className={css.contactsItem}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button className={css.delete} onClick={handleDeleteContact} name={contact.name}>Delete</button>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}
