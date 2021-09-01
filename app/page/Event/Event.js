import React, {useState} from "react";
import EventSearch from './EventSearch'
import EventView from './EventView'
import EventList from './EventList'
import { Spinner } from "../../components";
import {SEARCH, LOAD, ADD, LIST} from '../../properties/properties'

export default function Event() {

  let [eventSeacrh, setEventSearch] = useState({name: '', month: 0})
  let [events, setEvents] = useState([]);
  let [operator, setOperator] = useState(SEARCH);
  let app;

  switch (operator) {
    case SEARCH:
      app = <EventSearch eventSeacrh={eventSeacrh} setEventSearch={setEventSearch} setOperator={setOperator} setEvents={setEvents}/>
      break;
    case ADD:
      app = <EventView setOperator={setOperator}/>
      break;
    case LIST:
      app = <EventList setOperator={setOperator} events={events}/>
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