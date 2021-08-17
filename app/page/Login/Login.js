import React from "react";
import { View, StyleSheet } from "react-native"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export default function Login(props) {
  
    const {user, setUser} = props

    const onSubmit = () => {
        setUser({name: "Nahuel"})
    }   
  return (
      <View  style={styles.formContainer}>    
      <Input    
        title="User"
      />
      <Input
        title="Password"
      />

      <Button
        title="Login"
        isRow={true}
        onPress={onSubmit}
      />
      <Button
        isRow={true}
        title="Create Account"
      />

      </View>
  )
}


const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    inputForm: {
      width: "100%",
      marginTop: 20,
    },
    btnContainerLogin: {
      marginTop: 20,
      width: "90%",
    },
    btnLogin: {
      backgroundColor: "#00a680",
    },
    iconRight: {
      color: "#c1c1c1",
    },
  });