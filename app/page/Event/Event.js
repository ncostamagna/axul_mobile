import React, {useState} from "react";
import EventSearch from './EventSearch'
import EventView from './EventView'
import EventList from './EventList'
import { Spinner } from "../../components";
import {SEARCH, LOAD, ADD, LIST, EDIT} from '../../properties/properties'

export default function Event() {

  let [eventSeacrh, setEventSearch] = useState({name: '', month: 0, expired: 0})
  let [events, setEvents] = useState([]);
  let [index, setIndex] = useState(0);
  let [operator, setOperator] = useState(SEARCH);
  let app;

  switch (operator) {
    case SEARCH:
      app = <EventSearch eventSeacrh={eventSeacrh} setEventSearch={setEventSearch} setOperator={setOperator} setEvents={setEvents}/>
      break;
    case ADD:
      app = <EventView setOperator={setOperator}/>
      break;
    case EDIT:
      app = <EventView setOperator={setOperator} events={events} index={index}/>
      break;
    case LIST:
      app = <EventList setOperator={setOperator} events={events} setIndex={setIndex}/>
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