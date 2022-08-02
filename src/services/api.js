import axios from 'axios';

const BASE_URL =
  'https://62e7b0450e5d74566af9d6be.mockapi.io/contacts/contacts';

export const getContactList = () => {
  const response = axios.get(BASE_URL);
  return response;
};
