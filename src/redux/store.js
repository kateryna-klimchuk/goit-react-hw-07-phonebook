import { configureStore } from '@reduxjs/toolkit';

import { contactsApi } from './contactSlice';

import { filter } from './reducers';

export const store = configureStore({
  reducer: { [contactsApi.reducerPath]: contactsApi.reducer, filter },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
