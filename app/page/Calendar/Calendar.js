import React, {useState, useEffect} from "react";
import CalendarList from './CalendarList'
import {Contacts, Events} from '../../utils/api'
import { getAuth } from "../../utils/storage";
import EventView from '../Event/EventView'
import { Spinner } from "../../components";
import {LIST, LOAD, SEARCH, VIEW} from '../../properties/properties'
import error from '../../utils/error'

export default function Calendar() {

  const contactApi = new Contacts();
  const eventApi = new Events();

  let [operator, setOperator] = useState(LOAD);
  let [reminders, setReminders] = useState([]);
  let [index, setIndex] = useState(0);

  useEffect(() => {

    let fn = async () => {

      const header = await getAuth();
      let c = contactApi.getByDays(30);
      let e = eventApi.getByDays(30,header);
      Promise.all([c,e]).then(values => {
        let reminders = [];
        if (values.length != 2) {
          error(`Error, the length is ${values.length}`)
          return
        }

        for (let i=0; i < values.length; i++){
          const {status, message} = values[i].data;

          if (status == undefined){
            continue;
          }

          if (status < 200 || status > 299) {
              error(`Status code is ${status} - ${message}`);
              return
          }
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
            date: item.birthday,
            eventType: 'C'
          })
        });

        values[1].data.data.map((item) => {
          reminders.push({
            id: item.id,
            title: item.title,
            description: item.description,
            days: item.days,
            date: item.date,
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
        setOperator(LIST)
      });

      
  }

  fn();
  }, []);

  let app;
  switch (operator) {
    case LIST:
    case SEARCH:
      app = <CalendarList reminders={reminders} setOperator={setOperator} setIndex={setIndex}/>
      break;
    case VIEW:
      let r = reminders[index]
      switch (r.eventType) {
        case 'E':
          app = <EventView setOperator={setOperator} events={reminders} index={index} readOnly={1}/>
          break;

        default:
          setOperator(LIST)
          break;
      }
      
      break;
    case LOAD:
      app = <Spinner />
      break;
  }

  return (
    app
  )
}