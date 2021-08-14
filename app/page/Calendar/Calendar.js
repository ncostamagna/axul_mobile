import React from "react";
import { View, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements";
import SelectDropdown from 'react-native-select-dropdown'

export default function Calendar() {
  return (
      <View  style={styles.row}>    
        <View style={styles.inputWrap}>
          <Input style={styles.inputdate} placeholder="Password" />
        </View>
        <View style={styles.inputWrap}>
          <Input style={styles.inputdate} />
        </View>
        
      </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
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
  }
});