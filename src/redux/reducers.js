import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './actions';
// import { fetchContacts } from './operations';
// import { INITIAL_CONTACTS } from 'data/data';

// export const contacts = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
//   [addContact.type]: (state, action) => [...state, action.payload],
//   [deleteContact.type]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

export const filter = createReducer('', {
  [filterContact.type]: (_, action) => action.payload.toLowerCase(),
});
