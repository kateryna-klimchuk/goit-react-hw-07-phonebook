import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62e7b0450e5d74566af9d6be.mockapi.io/contacts/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
