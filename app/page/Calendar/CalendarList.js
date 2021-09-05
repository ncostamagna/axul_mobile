import React from 'react';
import {ScrollView, VStack, HStack,Avatar,Text, Stack, Button } from 'native-base';
import { Linking } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import dateFormmat from '../../utils/date'
import {VIEW} from '../../properties/properties'

export default function CalendarList({reminders, setIndex, setOperator}) {



    return (
      <ScrollView
        _contentContainerStyle={{
          w: "100%",
        }} 
      >
        <VStack>
                {reminders.map((item, index) => {
                  let row, avatarURL, button, subtitle;
                  switch (item.eventType) {
                    case 'C':
                      const message = `text=${item.nick}%20muuuy%20feliz%20cumple!!%0AEspero%20que%20lo%20disfrutes%20al%20maximo%20en%20tu%20dia!!%0ATe%20deseo%20lo%20mejor%20para%20este%20nuevo%20año!!%0AMuchos%20exitooos!!%20:)` 
                      if (item.photo != "") {
                        avatarURL = item.photo;
                      }else{
                        avatarURL = "https://icon-library.com/images/foto-icon/foto-icon-3.jpg";
                      }

                      if (item.days == 0 && item.phone != "")
                        button = <Button colorScheme="success" px={3} rounded={90} onPress={() => {Linking.openURL(`whatsapp://send?${message}&phone=${item.phone}`)}}>
                                  <Ionicons name="logo-whatsapp" size={20} color="white" />
                                </Button>
                      subtitle = `${dateFormmat(item.date,false, "sort")} (${item.days} Dias)`

                      break;
                    case 'E':
                      button = <Button colorScheme="primary" px={3} rounded={90} onPress={() => {
                        setIndex(index)
                        setOperator(VIEW)
                      }}>
                                <AntDesign name="search1" size={20} color="white" />
                              </Button>

                      avatarURL = 'https://icon-library.com/images/calendar-512_1965.png'

                      let days = item.days==0?'':`(${item.days} Dias)`
                      subtitle = `${dateFormmat(item.date,true)} ${days}`
                      break;
                  }

                  row = <HStack space={4} width="100%" alignItems="center" my={2} >
                          <Avatar source={{
                              uri:avatarURL
                          }}/>
                        <Stack space={2} direction="column" flexGrow={1}>
                          
                          <Text width="100%" fontSize={item.days==0?23:20} paddingBottom={0} marginBottom={0} fontWeight={item.days==0?"bold":""}>
                              {item.title}
                          </Text>
                          <Text width="100%" fontSize={item.days==0?18:15} paddingBottom={0} marginBottom={0} >
                              {subtitle}
                          </Text>
                        </Stack>
                        {button}
                      </HStack>

                  let bgColor;
                  switch (item.days) {
                    case 0:
                        bgColor="green.200"
                      break;
                    case 1:
                        bgColor="yellow.100"
                      break;
                    case 2:
                        bgColor="blue.100"
                      break;                  
                    default:
                      break;
                  }
                  return (
                    <HStack width="100%" px={4} backgroundColor={bgColor} borderColor="gray.400" borderBottomWidth={1} key={item.id}>
                      {row} 
                    </HStack>
                  )
                })}
            </VStack>
    </ScrollView>
    );
}
