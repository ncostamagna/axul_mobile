import React, {useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Input, Stack, Center } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {Users} from '../../utils/api'

export default function Login(props) {
  
  const userApi = new Users();
  const {setUser} = props
  const [show, setShow] = useState(false)
  const [login, setLogin] = useState({username:'', password: ''})
  const handleClick = () => setShow(!show)
  const onSubmit = () => {
    userApi.login({username: login.username, password: login.password})
    .then(async (response) => {
      try {
        const {token, user} = response.data.data
        await AsyncStorage.setItem('token', token);
        
        const jsonValue = JSON.stringify(user)
        await AsyncStorage.setItem('user', jsonValue)
        setUser(user)
      } catch (error) {}
    })
    .catch(async (err) =>{})
  }


  return (
    <Center flex={1}>
     <Stack space={2}  w="90%" >
        <Stack space={2} direction={"column"}>
            <Input placeholder="Usuario" mt={5} 
              value={login.username}
              onChangeText={value => {setLogin({...login, ...{username: value}})} }
              />
            <Input placeholder="Contraseña"  type={show ? "text" : "password"}
              InputRightElement={
                <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}  colorScheme="blue">
                  <Ionicons name={show?"eye-off":"eye"} size={20} color="white" />
                </Button>
              }
              value={login.password}
              onChangeText={value => {setLogin({...login, ...{password: value}})} }
              />
        </Stack>
      </Stack>
      <Stack space={2} alignItems="center" mt={10}>
        <Stack space={2} direction={"row"}>
            <Button onPress={onSubmit} colorScheme="blue" >Iniciar sesion</Button>
            <Button paddingLeft={5} paddingRight={5}  colorScheme="blue">Crear cuenta</Button>
        </Stack>
      </Stack>
    </Center>
  )
}