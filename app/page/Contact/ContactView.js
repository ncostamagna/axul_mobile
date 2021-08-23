import React, {useState, useRef} from "react";
import {MONTHS} from '../../properties/labels'
import { Button, Input, Stack, Center, Select, ScrollView } from 'native-base';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import Api from '../../utils/api'

export default function ContactView({contactSeacrh, setContactSearch, setOperator, setContacts}) {
  const api = new Api();
  let [contact, setContact] = useState({id:'',firstname:'', lastname: '', phone:'', type:'', day:'', month: '', year:'', gender:'',nickname:'', template_id:'', photo:'',instagram:''})

  return (
    <ScrollView
   
    _contentContainerStyle={{

      w: "100%",
    }} 
  >
    <Center flex={1}>
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

          
      </Stack>
    </Stack>
    <Stack space={3} alignItems="center" mt={10}  w="90%" >
      <Stack space={2} direction={"row"}>
          <Button paddingLeft={5} paddingRight={5} colorScheme="success" flexGrow={1}>
            
            <Fontisto name="save" size={24} color="white" />
          </Button>
          <Button paddingLeft={5} paddingRight={5}  colorScheme="danger" flexGrow={1}>
            <AntDesign name="delete" size={24} color="white" />
          </Button>
          <Button paddingLeft={5} paddingRight={5} colorScheme="yellow" flexGrow={1} onPress={() => setOperator("S") }>
            <AntDesign name="back" size={24} color="black" />
          </Button>
      </Stack>
    </Stack>
    </Center>
    </ScrollView>
  )
}