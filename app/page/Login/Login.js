import React, {useState} from "react";
import { Button, Input, Stack, Center } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function Login(props) {
  
  const {setUser} = props
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)
  const onSubmit = () => setUser({name: "Nahuel"})

  return (
    <Center flex={1}>
     <Stack space={2}  w="90%" >
        <Stack space={2} direction={"column"}>
            <Input placeholder="Usuario" mt={5} />
            <Input placeholder="Contraseña"  type={show ? "text" : "password"}
              InputRightElement={
                <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}  colorScheme="blue">
                  <Ionicons name={show?"eye-off":"eye"} size={20} color="white" />
                </Button>
              }
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