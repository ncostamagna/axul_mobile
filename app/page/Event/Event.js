import React, {useState} from "react";
import EventSearch from './EventSearch'
import EventView from './EventView'
import { Spinner } from "../../components";
import {SEARCH, LOAD, ADD} from '../../properties/properties'

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
      app = <EventView setOperator={setOperator} events={events} setEvents={setEvents}/>
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