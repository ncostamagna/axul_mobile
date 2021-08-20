import React, {useState, useRef} from "react";
import {MONTHS} from '../../properties/labels'
import { Button, Input, Stack, Center, Select, CheckIcon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function Contact({contactSeacrh, setContactSearch, setOperator}) {

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
              <Select.Item label={row} value={index} />
            ))}

          </Select>
          
      </Stack>
    </Stack>
    <Stack space={3} alignItems="center" mt={10}>
      <Stack space={3} direction={"row"}>
          <Button paddingLeft={5} paddingRight={5} colorScheme="blue" 
                  onPress={()=>{
                    console.log("Boton")
                    setOperator("L");
                  }}>
            <Ionicons name="search" size={20} color="white" />
          </Button>
          <Button paddingLeft={5} paddingRight={5}  colorScheme="success">
            <Ionicons name="add" size={20} color="white" />
          </Button>
          <Button paddingLeft={5} paddingRight={5} colorScheme="yellow"  
                  onPress={()=>{ 
                    console.log(contactSeacrh);
                    setContactSearch({name: '', month: 0});}}>
            <Ionicons name="refresh" size={20} color="black" />
          </Button>
      </Stack>
    </Stack>
    </Center>
  )
}