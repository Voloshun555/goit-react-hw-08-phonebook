import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contact/operations';
import { getVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const deleteContactss = id => {
    dispatch(deleteContact(id));
  };

  const contacts = useSelector(getVisibleContacts);

  return (
    <ul style={{padding: 0}}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.list}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => deleteContactss(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
