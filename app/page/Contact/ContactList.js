import React, { useState } from 'react';

import {Box, Text,Pressable,Heading,IconButton,Button, HStack, Avatar,    useToast, Stack } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';

export default function ContactList({contacts, setOperator}) {

    console.log(contacts)
    const renderItem = ({index,item}) => (
        <Box>
            <Pressable
                key={index}
                keyExtractor={index}
                onPress={() => {
                    setOperator("S");
                }}
                alignItems= 'center'
                bg="white"
                borderBottomColor= 'trueGray.200'
                borderBottomWidth= {1}
                justifyContent= 'center'
                height= {50}
                underlayColor={'#AAA'}
                _pressed={{
                  bg:'trueGray.200'
                }}
                py={10}>

                  <HStack width="100%" px={4}>
                    <HStack space={2} width="100%" alignItems="center">
                      <Avatar source={{
                          uri:'https://media-exp1.licdn.com/dms/image/C4E03AQFGgbyfpdzgUg/profile-displayphoto-shrink_200_200/0/1627136379180?e=1634774400&v=beta&t=PjF9_3WdskLjEHUdO15vVjnSCx9oFdxWRpy8Gk87Uog'
                      }}>
                      <Text>{index}</Text>
                      </Avatar>
                      <Stack space={2} width="100%" direction="column">
                      <Text width="100%" fontSize={20} paddingBottom={0} marginBottom={0} fontWeight="bold">
                        {item.name} {item.lastName} 
                      </Text>
                      <Text width="100%" paddingBottom={0} marginTop={0}>
                        {item.birthday} 
                      </Text>
                      </Stack>
                    </HStack>
                  </HStack>
            </Pressable>
        </Box>
    );


    return (
        <Box width="100%"  bg= 'white' flex= {1} safeAreaTop>
            <Stack  direction="row">
            <Stack space={2}  direction="row" >
                <Button colorScheme="blue" onPress={() => {
                    setOperator("S");
                }} marginX={5}>
                    <Ionicons name="arrow-back" size={20} color="white" />
                </Button>
                
                <Heading my={1} size="lg">Lista de Contactos</Heading>
            </Stack></Stack>
          <Box  bg= 'white' safeArea flex= {1}>
            <SwipeListView
                data={contacts}
                renderItem={renderItem}
                rightOpenValue={-130}
                previewRowKey={'0'} 
                previewOpenValue={-40}
                previewOpenDelay={3000}
                keyExtractor={(item, index) => index.toString()}
            />
            </Box>
        </Box>
    );
}
