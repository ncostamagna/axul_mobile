import React, {useState, useEffect} from "react";
import CalendarList from './CalendarList'
import {Contacts, Events} from '../../utils/api'
import dateFormat from '../../utils/date'

export default function Calendar() {

  const contactApi = new Contacts();
  const eventApi = new Events();

  let [operator, setOperator] = useState("S");
  let [reminders, setReminders] = useState([])
  
  useEffect(() => {
    let c = contactApi.getByDays(30);
    let e = eventApi.getByDays(30);

    Promise.all([c,e]).then(values => {
      let reminders = [];
      if (values.length != 2) {
        console.log("Error, the length is ", values.length)
        return
      }
      values[0].data.data.map((item) => {
        reminders.push({
          id: item.id,
          title: item.firstname + " " + item.lastname,
          phone: item.phone,
          photo: item.photo,
          image: item.imgae,
          nick: item.nickname,
          days: item.days,
          date: dateFormat(item.birthday),
          eventType: 'C'
        })
      });

      values[1].data.data.map((item) => {
        reminders.push({
          id: item.id,
          title: item.title,
          description: item.description,
          days: item.days,
          date: dateFormat(item.date, true),
          eventType: 'E'
        })
      })

      reminders.sort((a,b) => {
        if (a.days > b.days)
          return 1;
        
        if (a.days < b.days)
          return -1;
        
          return 0;
      });
   
      setReminders(reminders)
    });
  }, [operator]);

  let app;
  switch (operator) {
    case "S":
      app = <CalendarList reminders={reminders}/>
      break;
  }

  return (
    app
  )
}