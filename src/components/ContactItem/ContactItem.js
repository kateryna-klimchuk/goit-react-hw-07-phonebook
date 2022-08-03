import { useDeleteContactMutation } from '../../redux/contactSlice';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.Styled';

const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const { name, number, id } = contact;
  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        x
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
