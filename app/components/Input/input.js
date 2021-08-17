import React from "react";
import { View, StyleSheet } from "react-native"
import { Input as Inp} from "react-native-elements";
import {BASE_BLUE} from '../../properties/properties'


export default function Input(props) {

    const {title, value, onChangeText} = props

    return (
        <View  style={styles.row}>    
            <View style={styles.inputWrap}>
            <Inp style={styles.inputdate} placeholder={title} value={value} onChangeText={onChangeText}/>
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
  }
});
