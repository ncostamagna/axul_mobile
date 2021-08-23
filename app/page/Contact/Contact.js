import React, {useState, useRef} from "react";
import {MONTHS} from '../../properties/labels'
import { Button, Input, Stack, Center, Select, CheckIcon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import ContactSearch from './ContactSearch'
import ContactList from './ContactList'
import ConcactView from './ContactView'

export default function Contact() {

  let [contactSeacrh, setContactSearch] = useState({name: '', month: 0})
  let [contacts, setContacts] = useState([])

  let [operator, setOperator] = useState("S");

  let app;
  switch (operator) {
    case "S":
      app = <ContactSearch contactSeacrh={contactSeacrh} setContactSearch={setContactSearch} setOperator={setOperator} setContacts={setContacts}/>
      break;
    case "L":
      app = <ContactList setOperator={setOperator} contacts={contacts} setContacts={setContacts}/>
      break;
    case "A":
      app = <ConcactView setOperator={setOperator} contacts={contacts} setContacts={setContacts}/>
      break;
    default:
      break;
  }

  return (
    app
  )
}