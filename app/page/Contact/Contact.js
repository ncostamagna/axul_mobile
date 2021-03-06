import React, {useState, useRef} from "react";
import {MONTHS} from '../../properties/labels'
import { Button, Input, Stack, Center, Select, CheckIcon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import ContactSearch from './ContactSearch'
import ContactList from './ContactList'
import ConcactView from './ContactView'
import { Spinner } from "../../components";
import {LIST, LOAD, SEARCH, ADD, EDIT} from '../../properties/properties'

export default function Contact() {

  let [contactSeacrh, setContactSearch] = useState({name: '', month: 0})
  let [contacts, setContacts] = useState([]);
  let [index, setIndex] = useState(0);
  let [operator, setOperator] = useState(SEARCH);

  let app;
  switch (operator) {
    case SEARCH:
      app = <ContactSearch contactSeacrh={contactSeacrh} setContactSearch={setContactSearch} setOperator={setOperator} setContacts={setContacts}/>
      break;
    case LIST:
      app = <ContactList setOperator={setOperator} contacts={contacts} setContacts={setContacts} setIndex={setIndex}/>
      break;
    case ADD:
      app = <ConcactView setOperator={setOperator}/>
      break;
    case EDIT:
      app = <ConcactView setOperator={setOperator} contacts={contacts} index={index}/>
      break;
    case LOAD:
      app = <Spinner />
      break;
    default:
      break;
  }

  return (
    app
  )
}