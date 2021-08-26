import React from "react"
import {
  Spinner as Spin,
  HStack,
  Center,
} from "native-base"

export default function Spinner(props) {

    return (    
        <Center flex={1}>
            <HStack space={2}>
                <Spin accessibilityLabel="Loading posts" 
                color="blue.500" 
                size={70} />

            </HStack>
        </Center>
        )
}