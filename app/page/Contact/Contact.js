import React from "react";
import { View, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements";
import SelectDropdown from 'react-native-select-dropdown'
import {MONTHS} from '../../properties/labels'
import {BASE_BLUE} from '../../properties/properties'

export default function Home() {
  return (
    <View style={styles.pTop}>
      <View  style={styles.row}>    
        <View style={styles.inputWrap}>
          <Input style={styles.inputdate} placeholder="Nombre" />
        </View>
        <View style={styles.inputWrap}>
          <SelectDropdown  data={MONTHS} 
          buttonTextStyle={styles.inputdate} 
          buttonStyle={styles.inputdate}
          dropdownStyle={styles.inputdate}
          rowStyle={styles.inputdate}
          rowTextStyle={styles.inputdate}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          />
        </View>
      </View>
      <View  style={styles.row}>    
        <View style={styles.inputWrap}>
          <Button
          title="Search"
          color={BASE_BLUE}
          containerStyle={styles.button}
          />
        </View>
        <View style={styles.inputWrap}>
          <Button
          title="Add"
          color={BASE_BLUE}
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
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595"
  },
  inputcvv: {
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595"
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
  }
});
