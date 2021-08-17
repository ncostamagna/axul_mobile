import React, {useState, useRef} from "react";
import { View, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements";
import SelectDropdown from 'react-native-select-dropdown'
import {MONTHS} from '../../properties/labels'
import {BASE_BLUE} from '../../properties/properties'

export default function Contact() {

  let [contactSeacrh, setContactSearch] = useState({name: '', month: 0})
  const dropdownRef = useRef({});


  return (
    <View style={styles.pTop}>
      <View  style={styles.row}>    
        <View style={styles.inputWrap}>
          <Input style={styles.inputdate} placeholder="Nombre"value={contactSeacrh.name} onChangeText={value => {setContactSearch({...contactSeacrh, ...{name: value}})} }/>
        </View>
        </View>
        <View  style={styles.row}>    
        <View style={styles.inputWrap}>
          <SelectDropdown  data={MONTHS} ref={dropdownRef} 
          buttonTextStyle={styles.inputdate} 
          defaultButtonText={MONTHS[0]}
          buttonStyle={styles.inputdate}
          dropdownStyle={styles.dropdown}
          rowStyle={styles.dropdown}
          
          onSelect={(selectedItem, index) => {
            setContactSearch({...contactSeacrh, ...{month:index}})
            console.log(selectedItem, index)
          }}
          />
        </View>
      </View>
      <View  style={styles.row}>    
        <View style={styles.inputWrap}>
          <Button
          title="Buscar"
          color={BASE_BLUE}
          containerStyle={styles.button}
          />
        </View>
      </View>
      <View  style={styles.row}>  
        <View style={styles.inputWrap}>
          <Button
          title="Agregar"
          color={BASE_BLUE}
          containerStyle={styles.button}
          />
        </View>
      </View>
      <View  style={styles.row}>  
        <View style={styles.inputWrap}>
          <Button
          title="Limpiar"
          color={BASE_BLUE}
          onPress={()=>{ 
            console.log(contactSeacrh)
            setContactSearch({name: '', month: 0})
            dropdownRef.current.reset() 
          }}
          containerStyle={styles.button}
          />
        </View>
      </View>
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
