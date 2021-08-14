import React from "react";
import { View, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements";

export default function Login(props) {
  
    const {user, setUser} = props

    const onSubmit = () => {
        setUser({name: "Nahuel"})
    }   
  return (
      <View  style={styles.formContainer}>    
      <Input    
            placeholder="User"
            />
      <Input
        placeholder="Password"
      />

        <Button
        title="Login"
        color="#841584"
        containerStyle={styles.btnContainerLogin}
        onPress={onSubmit}
        />
        <Button
        title="Create Account"
        color="#841584"
        containerStyle={styles.btnContainerLogin}
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