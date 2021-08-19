import React, {useState} from "react";
import { StyleSheet} from "react-native"
import { Button, Input, HStack, Stack, Center, NativeBaseProvider  } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function Login(props) {
  
    const {user, setUser} = props
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const onSubmit = () => { 
      setUser({name: "Nahuel"})
    }   
  return (
    <Center flex={1}>
     <Stack space={2}  w="90%" >
        <Stack space={2} direction={"column"}>
            <Input placeholder="Usuario" mt={5} />
            <Input placeholder="Contraseña"  type={show ? "text" : "password"}
              InputRightElement={
                <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
                  <Ionicons name={show?"eye-off":"eye"} size={20} color="white" />

                </Button>
              }
            />
        </Stack>
        </Stack>
        <Stack space={2} alignItems="center" mt={10}>
        <Stack space={2} direction={"row"}>
            <Button onPress={onSubmit} paddingLeft={10} paddingRight={10} >Login</Button>
            <Button>Crear cuenta</Button>
        </Stack>
      </Stack>
    </Center>
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