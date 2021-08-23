import React from 'react';
import {ScrollView, VStack, HStack,Avatar,Text, Stack, Button } from 'native-base';
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CalendarList({contacts, setOperator}) {



    return (
        <ScrollView
   
      _contentContainerStyle={{

        w: "100%",
      }} 
    >

        <VStack>
                {[
                "one",
                "two",
                "three",
                "four",
                "five",
                "six",
                "seven",
                "eight",
                "nine",
                "ten",
                "eleven",
                ].map((val) => (
                    <HStack width="100%" px={4} backgroundColor="green.100" borderColor="gray.400" borderBottomWidth={1}>
                    <HStack space={4} width="100%" alignItems="center" my={2} >
                      <Avatar source={{
                          uri:'https://media-exp1.licdn.com/dms/image/C4E03AQFGgbyfpdzgUg/profile-displayphoto-shrink_200_200/0/1627136379180?e=1634774400&v=beta&t=PjF9_3WdskLjEHUdO15vVjnSCx9oFdxWRpy8Gk87Uog'
                      }}>
                        <Text>{val}</Text>
                      </Avatar>
                      <Stack space={2} direction="column" flexGrow={1}>
                        <Text width="100%" fontSize={20} paddingBottom={0} marginBottom={0} fontWeight="bold">
                            Nahuel Costamagna 
                        </Text>
                        <Text width="100%" fontSize={15} paddingBottom={0} marginBottom={0} >
                            11/10
                        </Text>
                      </Stack>
                      <Button colorScheme="success" px={3} rounded={90} onPress={() => {Linking.openURL('whatsapp://send?text=Feliz%20cumple%20Querido&phone=5491130100415')}}>
                        <Ionicons name="logo-whatsapp" size={20} color="white" />
                      </Button>
                    </HStack>
                  </HStack>
                ))}
            </VStack>
    </ScrollView>
    );
}
