import React from "react";
import { View, StyleSheet } from "react-native"
import SelectDropdown from 'react-native-select-dropdown'
import {BASE_BLUE} from '../../properties/properties'

export default React.forwardRef((props, ref) => {
  const {data, defaultValue, onSelect} = props

  return (
        <View  style={styles.row}>    
            <View style={styles.inputWrap}>
                <SelectDropdown  data={data} ref={ref} 
                buttonTextStyle={styles.inputdate} 
                defaultButtonText={defaultValue}
                buttonStyle={styles.inputdate}
                dropdownStyle={styles.dropdown}
                rowStyle={styles.dropdown}
                onSelect={onSelect}
                />
        </View>
      </View>
  )
})


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
