import React, { useState } from 'react';

import {Box, Text,Pressable,Heading,IconButton,Button, HStack, Avatar,    useToast, Stack } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';
import {SEARCH} from '../../properties/properties'
import dateFormmat from '../../utils/date'

export default function ContactList({events, setOperator}) {
    const renderItem = ({index,item}) => (
        <Box my={0} py={0}>
            <Pressable
                key={index}
                keyExtractor={index}
                onPress={() => {
                    setOperator(SEARCH);
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
                      <Stack space={2} width="100%" direction="column">
                      <Text width="100%" fontSize={20} paddingBottom={0} marginBottom={0} fontWeight="bold">
                        {item.title} 
                      </Text>
                      <Text width="100%" paddingBottom={0} marginTop={0}>
                        {dateFormmat(item.date,false, "sort")} ({item.days} Dias)
                      </Text>
                      </Stack>
                    </HStack>
                  </HStack>
            </Pressable>
        </Box>
    );


    return (
        <Box width="100%"  bg= 'white' flex= {1} paddingBottom={0} marginBottom={0}>

            <Stack  direction="row" bg='blue.100' my={0}>
                <Stack space={2}  direction="row" my={0}>
                <Button colorScheme="blue" onPress={() => {
                    setOperator(SEARCH);
                }} py={1} rounded={0}>
                    <Ionicons name="arrow-back" size={30} color="white" />
                </Button>
                
                <Heading paddingTop={1} size="md" fontWeight="normal">{events.length} contactos</Heading>
            </Stack>
        </Stack>
          <Box  bg= 'white' flex= {1} my={0} py={0} >
            <SwipeListView
                my={0} py={0}
                data={events}
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
