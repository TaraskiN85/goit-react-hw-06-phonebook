import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contactsData',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload].sort(
        (contactA, contactB) => contactA.name.localeCompare(contactB.name)
      );
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.name !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
