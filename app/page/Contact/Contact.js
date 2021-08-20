import React, {useState, useRef} from "react";
import {MONTHS} from '../../properties/labels'
import { Button, Input, Stack, Center, Select, CheckIcon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import ContactSearch from './ContactSearch'
import ContactList from './ContactList'

export default function Contact() {

  let [contactSeacrh, setContactSearch] = useState({name: '', month: 0})
  let [contacts, setContacts] = useState([{name: 'Nahuel', lastName: 'Costamagna', birthday: '11/10/1989', nickName: "Nahue", phone:"", template:"", type: ""},
  {name: 'Celeste', lastName: 'Costamagna', birthday: '20/11/1999', nickName: "Celes", phone:"", template:"", type: ""},
  {name: 'Azul', lastName: 'Costamagna', birthday: '14/01/2015', nickName: "Azul", phone:"", template:"", type: ""},
  {name: 'Nahuel', lastName: 'Costamagna', birthday: '11/10/1989', nickName: "Nahue", phone:"", template:"", type: ""},
  {name: 'Celeste', lastName: 'Costamagna', birthday: '20/11/1999', nickName: "Celes", phone:"", template:"", type: ""},
  {name: 'Azul', lastName: 'Costamagna', birthday: '14/01/2015', nickName: "Azul", phone:"", template:"", type: ""},
  {name: 'Nahuel', lastName: 'Costamagna', birthday: '11/10/1989', nickName: "Nahue", phone:"", template:"", type: ""},
  {name: 'Celeste', lastName: 'Costamagna', birthday: '20/11/1999', nickName: "Celes", phone:"", template:"", type: ""},
  {name: 'Azul', lastName: 'Costamagna', birthday: '14/01/2015', nickName: "Azul", phone:"", template:"", type: ""},
  {name: 'Nahuel', lastName: 'Costamagna', birthday: '11/10/1989', nickName: "Nahue", phone:"", template:"", type: ""},
  {name: 'Celeste', lastName: 'Costamagna', birthday: '20/11/1999', nickName: "Celes", phone:"", template:"", type: ""},
  {name: 'Azul', lastName: 'Costamagna', birthday: '14/01/2015', nickName: "Azul", phone:"", template:"", type: ""}])

  let [operator, setOperator] = useState("S");

  let app;
  switch (operator) {
    case "S":
      app = <ContactSearch contactSeacrh={contactSeacrh} setContactSearch={setContactSearch} setOperator={setOperator}/>
      break;
    case "L":
      app = <ContactList setOperator={setOperator} contacts={contacts} setContacts={setContacts}/>
    default:
      break;
  }

  return (
    app
  )
}