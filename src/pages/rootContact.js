import {ContactForm} from "components/contactForm/contactForm"
import { ContactList } from "components/contactList/contactList"
import { Filter } from "components/Filter/Filter"
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchContact } from 'redux/contact/operations';
import { getError, getIsLoading } from 'redux/selectors';
import css from '../components/cssRootContacts.module.css'



export default function RootContacts () {
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContact());
    }, [dispatch]);
  
    return(
        <div className={css.appDiv}>
        <ContactForm/>
        <Filter/>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList/>
        </div>
    )
}