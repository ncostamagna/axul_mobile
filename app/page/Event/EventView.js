import React, { useState, useRef } from "react";
import { MONTHS, DAYS, EVENT_YEARS, HOURS, MINUTES } from '../../properties/labels'
import { Button, Input, Stack, Center, Select, ScrollView, CheckIcon, TextArea } from 'native-base';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { getAuth } from "../../utils/storage";
import { Events } from '../../utils/api'
import { LIST, SEARCH } from '../../properties/properties'

export default function EventView({ setOperator, events, index, readOnly}) {
  const eventApi = new Events();

  var d = new Date();
  let value = { id: '', title: '', description: '', day: '', month: (d.getMonth() + 1), year: 0, hours:'', minutes:''}

  if (events!=undefined){
    value = events[index];

    let datetime = events[index].date.split('T')
    let date = datetime[0].split('-')
    let time = datetime[1].split(':')

    value.day = parseInt(date[2] - 1, 10)
    value.month = parseInt(date[1], 10)

    EVENT_YEARS.forEach((year, i) => {
      if (year==date[0]) {
        value.year = i;
      }
    });
    HOURS.forEach((hours, i) => {
      if (hours==time[0]) {
        value.hours = i
      }
    });
    MINUTES.forEach((minutes, i) =>{
      if(minutes==time[1]) 
        value.minutes = i
      });
  }
  let [event, setEvent] = useState(value)

  return (
    <ScrollView

      _contentContainerStyle={{

        w: "100%",
      }}
    >
      <Center flex={1}>
        <Stack space={2} w="90%" >
          <Stack space={2} direction={"column"}>
            <Input placeholder="Title" mt={5}
              value={event.title}
              onChangeText={value => { setEvent({ ...event, ...{ title: value } }) }} 
              isDisabled={readOnly}/>

            <TextArea placeholder="Description" mt={5}
              value={event.description}
              onChangeText={value => { setEvent({ ...event, ...{ description: value } }) }}
              isDisabled={readOnly}/>

            <Stack space={2} direction={"row"} mt={5}>
              <Select
                selectedValue={event.day}
                minWidth={100}
                isDisabled={readOnly}
                accessibilityLabel="Dia"
                placeholder="Dia"
                onValueChange={(itemValue) => setEvent({ ...event, ...{ day: itemValue } })}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                {DAYS.map((row, index) => (
                  <Select.Item key={index} label={row} value={index} />
                ))}

              </Select>
              <Select
                selectedValue={event.month}
                flexGrow={1}
                accessibilityLabel="Mes"
                placeholder="Mes"
                isDisabled={readOnly}
                onValueChange={(itemValue) => setEvent({ ...event, ...{ month: itemValue } })}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                {MONTHS.map((row, index) => (
                  <Select.Item key={index} label={row} value={index} />
                ))}

              </Select>

            </Stack>
            <Stack space={2} direction={"row"} mt={5}>
            <Select
                selectedValue={event.year}
                flexGrow={1}
                accessibilityLabel="Año"
                placeholder="Año"
                isDisabled={readOnly}
                onValueChange={(itemValue) => setEvent({ ...event, ...{ year: itemValue } })}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                {EVENT_YEARS.map((row, index) => (
                  <Select.Item key={index} label={row} value={index} />
                ))}

              </Select>
            </Stack>
            <Stack space={2} direction={"row"} mt={5}>
              <Select
                selectedValue={event.hours}
                minWidth={150}
                accessibilityLabel="Hora"
                placeholder="Hora"
                isDisabled={readOnly}
                onValueChange={(itemValue) => setEvent({ ...event, ...{ hours: itemValue } })}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                {HOURS.map((row, index) => (
                  <Select.Item key={index} label={row} value={index} />
                ))}

              </Select>
              <Select
                selectedValue={event.minutes}
                flexGrow={1}
                accessibilityLabel="Minutos"
                placeholder="Minutos"
                isDisabled={readOnly}
                onValueChange={(itemValue) => setEvent({ ...event, ...{ minutes: itemValue } })}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                {MINUTES.map((row, index) => (
                  <Select.Item key={index} label={row} value={index} />
                ))}

              </Select>

          
            </Stack>
          </Stack>
        </Stack>
        <Stack space={3} alignItems="center" my={10} w="90%"  >
          <Stack space={2} direction={"row"}>
            <Button paddingLeft={5} paddingRight={5} colorScheme="success" flexGrow={1}
            display={readOnly?'none':'flex'}
              onPress={async () => {

                if (event.id != ''){
                  return
                }
                const { title, description, day, month, year, hours, minutes } = event
                const date = `${DAYS[day]}/${month}/${EVENT_YEARS[year]}`
                const time = `${HOURS[hours]}:${MINUTES[minutes]}`
                const e = { title, description, date,  time}

                const header = await getAuth();
                eventApi
                  .create(e, header)
                  .then((response) => {
                    setOperator(SEARCH);
                  })
                  .catch((err) => {
                    console.log(err);
                  })
                console.log(e)
              }}>
              <Fontisto name="save" size={24} color="white" />
            </Button>
            <Button paddingLeft={5} paddingRight={5} colorScheme="danger" flexGrow={1}
            display={readOnly?'none':'flex'}>
              <AntDesign name="delete" size={24} color="white" />
            </Button>
            <Button paddingLeft={5} paddingRight={5} colorScheme="yellow" flexGrow={1} onPress={() => setOperator(SEARCH)}>
              <AntDesign name="back" size={24} color="black" />
            </Button>
          </Stack>
        </Stack>
      </Center>
    </ScrollView>
  )
}