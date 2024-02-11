import { useDispatch, useSelector } from 'react-redux'

import { selectFilter } from '../../redux/contacts/contactsSlice.selectors'
import { filterContacts } from '../../redux/contacts/contactsSlice'

import css from './Filter.module.css'

export const Filter = () => {
  const filter = useSelector(selectFilter)

  const dispatch = useDispatch()
  const handleSearch = (e) => {
    const searchData = e.currentTarget.value
    dispatch(filterContacts(searchData))
  }

  return (
    <div>
      <p className={css.filterLabel}>Find contacts by name</p>
      <input className={css.filterSearchField} type='search'
        onChange={handleSearch} value={filter} />
    </div>
  )
}
