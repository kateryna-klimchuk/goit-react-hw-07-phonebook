import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';
import { nanoid } from 'nanoid';

import { Form, Input, Label, FormButton } from './ContactForm.Styled';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);

  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setUserName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    contacts.find(({ name }) => name === userName)
      ? alert(`${userName} is already in contacts.`)
      : dispatch(addContact(userName, number));
    reset();
  };

  const reset = () => {
    setUserName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmitForm}>
      <Label htmlFor={nameInputId}>Name</Label>

      <Input
        type="text"
        name="name"
        value={userName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
        id={nameInputId}
      />
      <Label htmlFor={numberInputId}>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
        id={numberInputId}
      />
      <FormButton type="submit">Add Contact</FormButton>
    </Form>
  );
};

export default ContactForm;
