import React, {useState, useRef} from "react";
import CalendarList from './CalendarList'

export default function Contact() {

  let [contactSeacrh, setContactSearch] = useState({name: '', month: 0})

  let [operator, setOperator] = useState("S");

  let app;
  switch (operator) {
    case "S":
      app = <CalendarList contactSeacrh={contactSeacrh} setContactSearch={setContactSearch} setOperator={setOperator}/>
      break;
  }

  return (
    app
  )
}