import React from "react";
import { View, StyleSheet } from "react-native"
import {Button as Btn} from "react-native-elements";

import {BASE_BLUE} from '../../properties/properties'

export default function Button(props) {

    const {title, isRow, onPress} = props;
    const button = <Btn
                      title={title}
                      color={BASE_BLUE}
                      containerStyle={styles.button}
                      onPress={onPress}
                      />
    if (isRow) {
        return (
          <View  style={styles.row}>    
            <View style={styles.inputWrap}>
              {button}
            </View>
          </View>
      )
    }

  return button
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
  button: {
    marginLeft: 10,
    marginRight: 10
  }
});
