import React from "react";
import {MONTHS} from '../../properties/labels'
import { getAuth } from "../../utils/storage";
import { Button, Input, Stack, Center, Select, CheckIcon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {Contacts} from '../../utils/api'
import {ADD, LIST, LOAD} from '../../properties/properties'
import error from '../../utils/error'

export default function ContactSearch({contactSeacrh, setContactSearch, setOperator, setContacts}) {
  const contactApi = new Contacts();

  return (
    <Center flex={1}>
    <Stack space={2}  w="90%" >
      <Stack space={2} direction={"column"}>
          <Input placeholder="Nombre" mt={5} 
            value={contactSeacrh.name}
            onChangeText={value => {setContactSearch({...contactSeacrh, ...{name: value}})} } />

          <Select
            getRef={(ref) => this.SearchInput = ref}
            selectedValue={contactSeacrh.month}
            minWidth={200}
            accessibilityLabel="Seleccione Mes"
            placeholder="Seleccione Mes"
            onValueChange={(itemValue) => setContactSearch({...contactSeacrh, ...{month: itemValue}})}
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
    </Stack>
    <Stack space={3} alignItems="center" mt={10}  w="90%" >
      <Stack space={3} direction={"row"}>
          <Button paddingLeft={5} paddingRight={5} colorScheme="blue" flexGrow={1}
                  onPress={async ()=>{
                    setOperator(LOAD);
                    const {id, token} = await getAuth();

                    contactApi
                      .get(contactSeacrh, {id, token})
                      .then((response) => {
                        setContacts(response.data.data)
                        setOperator(LIST);
                      })
                      .catch((err) =>{
                        error(err);
                      })
                  }}>
            <Ionicons name="search" size={24} color="white" />
          </Button>
          <Button paddingLeft={5} paddingRight={5}  colorScheme="success" flexGrow={1}
            onPress={()=> setOperator(ADD)}>
            <Ionicons name="add" size={24} color="white" />
          </Button>
          <Button paddingLeft={5} paddingRight={5} colorScheme="yellow" flexGrow={1}
                  onPress={()=> setContactSearch({name: '', month: 0})}>
            <Ionicons name="refresh" size={24} color="black" />
          </Button>
      </Stack>
    </Stack>
    </Center>
  )
}