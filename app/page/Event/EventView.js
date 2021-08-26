import React, { useState, useRef } from "react";
import { MONTHS, DAYS, EVENT_YEARS } from '../../properties/labels'
import { Button, Input, Stack, Center, Select, ScrollView, CheckIcon, TextArea } from 'native-base';
import { AntDesign, Fontisto, Ionicons } from '@expo/vector-icons';
import { Events } from '../../utils/api'
import { SEARCH } from '../../properties/properties'

export default function EventView({ contactSeacrh, setContactSearch, setOperator, setEvents }) {
  const eventApi = new Events();
  let [event, setEvent] = useState({ id: '', title: '', description: '', day: '', month: '', year: 0})

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
              onChangeText={value => { setEvent({ ...event, ...{ title: value } }) }} />

            <TextArea placeholder="Description" mt={5}
              value={event.description}
              onChange={(e) => { setEvent({ ...event, ...{ description: e.currentTarget.value } }) }} />

            <Stack space={2} direction={"row"} mt={5}>
              <Select
                selectedValue={event.day}
                minWidth={100}
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

              <Select
                selectedValue={event.year}
                minWidth={100}
                accessibilityLabel="Año"
                placeholder="Año"
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
          </Stack>
        </Stack>
        <Stack space={3} alignItems="center" my={10} w="90%"  >
          <Stack space={2} direction={"row"}>
            <Button paddingLeft={5} paddingRight={5} colorScheme="success" flexGrow={1}
              onPress={() => {
                console.log(contact)

                const { firstname, lastname, nickname, phone } = contact
                let year = '1900'
                if (contact.year != "") {
                  year = EVENT_YEARS[contact.year]
                }

                let month = contact.month.toString().padStart(2, "0");
                let birthday = `${year}-${month}-${DAYS[contact.day]}`
                let c = { firstname, lastname, nickname, birthday, phone }

                eventApi
                  .create(c)
                  .then((response) => {
                    setOperator(SEARCH);
                  })
                  .catch((err) => {
                    console.log(err);
                  })
                console.log(c)
              }}>
              <Fontisto name="save" size={24} color="white" />
            </Button>
            <Button paddingLeft={5} paddingRight={5} colorScheme="danger" flexGrow={1}>
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