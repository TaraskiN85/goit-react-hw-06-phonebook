import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'

import { selectContacts } from '../../redux/contacts/contactsSlice.selectors'
import { addContact } from '../../redux/contacts/contactsSlice'

import css from './PhonebookForm.module.css'

export const PhonebookForm = () => {
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch()

  const addUser = (formData => {
    if (contacts.some(contact => contact.name === formData.name)) {
      alert(`${formData.name} is already in contacts.`)
      return
    }
   
    dispatch(addContact(formData));
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const id = nanoid()
    const name = e.currentTarget.elements.userName.value
    const number = e.currentTarget.elements.userNumber.value
    const profileData = { name, number, id }

    addUser(profileData);
    e.currentTarget.reset()
  }

  
  
  return (
    <form className={css.formContainer} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>
        <span className={css.labelTitle}>Name</span>
        <input className={css.labelInput} type="text" name="userName" placeholder='John Doe' required />
      </label>
      <label className={css.formLabel}>
        <span className={css.labelTitle}>Number</span>
        <input className={css.labelInput} type="tel" name="userNumber" placeholder='555-55-55' required />
      </label>
      <button className={css.button} type='submit'>Add Contact</button>
    </form>
  )
}
