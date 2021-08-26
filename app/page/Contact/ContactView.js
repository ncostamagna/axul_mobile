import React, {useState, useRef} from "react";
import {MONTHS, DAYS, YEARS} from '../../properties/labels'
import { Button, Input, Stack, Center, Select, ScrollView , CheckIcon, Avatar} from 'native-base';
import { AntDesign, Fontisto, Ionicons } from '@expo/vector-icons';
import {Contacts} from '../../utils/api'
import {SEARCH} from '../../properties/properties'

export default function ContactView({contactSeacrh, setContactSearch, setOperator, setContacts}) {
  const contactApi = new Contacts();
  let [contact, setContact] = useState({id:'',firstname:'', lastname: '', phone:'', type:'', day:'', month: '', year:'', gender:'',nickname:'', template_id:'', photo:'',instagram:''})

  return (
    <ScrollView
   
    _contentContainerStyle={{

      w: "100%",
    }} 
  >
    <Center flex={1}>
    <Stack space={2}  mt={5} >
      <Avatar minWidth={200} minHeight={200} 
          source={{
            uri:'https://icon-library.com/images/foto-icon/foto-icon-3.jpg'
        }}/>
    </Stack>
    <Stack space={2}  w="90%" >
      <Stack space={2} direction={"column"}>
        <Input placeholder="Nombre" mt={5} 
            value={contact.firstname}
            onChangeText={value => {setContact({...contact, ...{firstname: value}})} } />

        <Input placeholder="Apellido" mt={5} 
            value={contact.lastname}
            onChangeText={value => {setContact({...contact, ...{lastname: value}})} } />
        
        <Input placeholder="Nick" mt={5} 
            value={contact.nickname}
            onChangeText={value => {setContact({...contact, ...{nickname: value}})} } />
        <Input placeholder="Phone" mt={5} 
            value={contact.phone}
            keyboardType='numeric'
            onChangeText={value => {
              let v = value
              if (v != "") {
                v = parseInt(value);
                v = v.toString();
              }

              setContact({...contact, ...{phone: v}})
              }} />
      <Stack space={2} direction={"row"} mt={5}>
        <Select
            selectedValue={contact.day}
            minWidth={130}
            accessibilityLabel="Dia"
            placeholder="Dia"
            onValueChange={(itemValue) => setContact({...contact, ...{day: itemValue}})}
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
            selectedValue={contact.month}
            flexGrow={1}
            accessibilityLabel="Mes"
            placeholder="Mes"
            onValueChange={(itemValue) => setContact({...contact, ...{month: itemValue}})}
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
            selectedValue={contact.year}
            minWidth={130}
            accessibilityLabel="Año"
            placeholder="Año"
            onValueChange={(itemValue) => setContact({...contact, ...{year: itemValue}})}
            _selectedItem={{
              bg: "cyan.600",
              endIcon: <CheckIcon size={4} />,
            }}
          >
            {YEARS.map((row, index) => (
              <Select.Item key={index} label={row} value={index} />
            ))}

        </Select>
        <Select
            // selectedValue={contact.gender}
            flexGrow={1}
            accessibilityLabel="Sexo"
            placeholder="Sexo"
            // onValueChange={(itemValue) => setContact({...contact, ...{day: gender}})}
            _selectedItem={{
              bg: "cyan.600",
              endIcon: <CheckIcon size={4} />,
            }}
          >
            {['Mujer','Hombre'].map((row, index) => (
              <Select.Item key={index} label={row} value={index} />
            ))}

          </Select>
         
      </Stack>
      <Stack space={2} direction={"row"} mt={5}>
      <Select
            // selectedValue={contact.gender}
            flexGrow={1}
            accessibilityLabel="Relacion"
            placeholder="Relacion"
            // onValueChange={(itemValue) => setContact({...contact, ...{day: gender}})}
            _selectedItem={{
              bg: "cyan.600",
              endIcon: <CheckIcon size={4} />,
            }}
          >
            {['Trabajo','Familia','Amistad'].map((row, index) => (
              <Select.Item key={index} label={row} value={index} />
            ))}

          </Select>

          <Button paddingLeft={5} paddingRight={5} colorScheme="success">
            <Ionicons name="add" size={24} color="white" />
          </Button>
      </Stack>
      <Stack space={2} direction={"row"} mt={5}>
        <Select
            // selectedValue={contact.gender}
            flexGrow={1}
            accessibilityLabel="Template"
            placeholder="Template"
            // onValueChange={(itemValue) => setContact({...contact, ...{day: gender}})}
            _selectedItem={{
              bg: "cyan.600",
              endIcon: <CheckIcon size={4} />,
            }}
          >
            {['Formal','Amigable', 'Muy Formal'].map((row, index) => (
              <Select.Item key={index} label={row} value={index} />
            ))}

          </Select>

          <Button paddingLeft={5} paddingRight={5} colorScheme="success">
            <Ionicons name="add" size={24} color="white" />
          </Button>
      </Stack>
      </Stack>
    </Stack>
    <Stack space={3} alignItems="center" my={10}  w="90%"  >
      <Stack space={2} direction={"row"}>
          <Button paddingLeft={5} paddingRight={5} colorScheme="success" flexGrow={1}
                  onPress={()=>{
                   console.log(contact)
 
                   const {firstname, lastname, nickname, phone} = contact
                   let year = '1900'
                   if (contact.year != "") {
                    year = YEARS[contact.year]
                   }

                   let month = contact.month.toString().padStart(2, "0");
                   let birthday = `${year}-${month}-${DAYS[contact.day]}`
                   let c = { firstname, lastname, nickname, birthday, phone }
                  
                   contactApi
                      .create(c)
                      .then((response) => {
                        setOperator(SEARCH);
                      })
                      .catch((err) =>{
                        console.log(err);
                      })
                  console.log(c)
                }}>
            <Fontisto name="save" size={24} color="white" />
          </Button>
          <Button paddingLeft={5} paddingRight={5}  colorScheme="danger" flexGrow={1}>
            <AntDesign name="delete" size={24} color="white" />
          </Button>
          <Button paddingLeft={5} paddingRight={5} colorScheme="yellow" flexGrow={1} onPress={() => setOperator(SEARCH) }>
            <AntDesign name="back" size={24} color="black" />
          </Button>
      </Stack>
    </Stack>
    </Center>
    </ScrollView>
  )
}