import React, {useState, useRef} from "react";
import { View, StyleSheet } from "react-native"
import {MONTHS} from '../../properties/labels'
import {BASE_BLUE} from '../../properties/properties'
import {Button} from '../../components/Button'
import {DropDown, Input} from '../../components/Input'

export default function Contact() {

  let [contactSeacrh, setContactSearch] = useState({name: '', month: 0})
  const dropdownRef = useRef({});

  return (
    <View style={styles.pTop}>
      <Input
            title="Nombre"
            value={contactSeacrh.name}
            onChangeText={value => {setContactSearch({...contactSeacrh, ...{name: value}})} }
            />
    <DropDown data={MONTHS} 
              ref={dropdownRef} 
              defaultValue={MONTHS[0]}
              onSelect={(selectedItem, index) => {
                setContactSearch({...contactSeacrh, ...{month:index}})
                console.log(selectedItem, index)
              }} />
     <Button isRow={true} title="Buscar"/>
     <Button isRow={true} title="Agregar"/>
     <Button isRow={true} title="Limpiar" onPress={()=>{ 
            console.log(contactSeacrh)
            setContactSearch({name: '', month: 0})
            dropdownRef.current.reset() 
      }} />
    </View>
  )
}


const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    marginBottom: 10
  },
  inputdate: {
    alignSelf: 'stretch',
    textAlign: 'center',
    width: '100%',
    marginBottom: -12,
    color: BASE_BLUE
  },
  inputcvv: {

    marginBottom: -12,
    color: BASE_BLUE
  },
  pTop:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    marginLeft: 10,
    marginRight: 10
  },
  dropdown: {

  }
});
