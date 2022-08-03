import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contactSlice';
import ContactItem from 'components/ContactItem/index';
import { List } from './ContactList.Styled';

const ContactList = () => {
  const searchFilter = useSelector(state => state.filter);

  const { data } = useGetContactsQuery();

  const getVisibleContacts = () => {
    if (searchFilter !== '') {
      return data.filter(({ name }) =>
        name.toLowerCase().includes(searchFilter)
      );
    }
    return data;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </List>
  );
};

export default ContactList;
