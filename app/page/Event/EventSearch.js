import React from "react";
import { MONTHS } from '../../properties/labels'
import { Button, Input, Stack, Center, Select, CheckIcon, Checkbox } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { getAuth } from "../../utils/storage"; 
import { Events } from '../../utils/api'
import { ADD, LIST, LOAD } from '../../properties/properties'

export default function EventList({ eventSeacrh, setEventSearch, setOperator, setEvents }) {
    const eventApi = new Events();

    return (
        <Center flex={1}>
            <Stack space={2} w="90%" >
                <Stack space={2} direction={"column"}>
                    <Input placeholder="Nombre" mt={5}
                        value={eventSeacrh.name}
                        onChangeText={value => { setEventSearch({ ...eventSeacrh, ...{ name: value } }) }} />

                    <Select
                        getRef={(ref) => this.SearchInput = ref}
                        selectedValue={eventSeacrh.month}
                        minWidth={200}
                        accessibilityLabel="Seleccione Mes"
                        placeholder="Seleccione Mes"
                        onValueChange={(itemValue) => setEventSearch({ ...eventSeacrh, ...{ month: itemValue } })}
                        _selectedItem={{
                            bg: "cyan.600",
                            endIcon: <CheckIcon size={4} />,
                        }}
                    >
                        {MONTHS.map((row, index) => (
                            <Select.Item key={index} label={row} value={index} />
                        ))}

                    </Select>
                    
                    <Checkbox.Group accessibilityLabel="choose values" 
                    defaultValue={eventSeacrh.expired==1?['expired']:[]}
                        onChange={value => {
                            if (value.length < 1){
                                setEventSearch({ ...eventSeacrh, ...{ expired: 0 } })
                                return
                            }

                            setEventSearch({ ...eventSeacrh, ...{ expired: 1 } })
                              }}>
                        <Checkbox value="expired" my={2}>
                        Expirado
                        </Checkbox>
                    </Checkbox.Group>
                    
                </Stack>
            </Stack>
            <Stack space={3} alignItems="center" mt={10} w="90%" >
                <Stack space={3} direction={"row"}>
                    <Button paddingLeft={5} paddingRight={5} colorScheme="blue" flexGrow={1}
                        onPress={async () => {
                            console.log(eventSeacrh)
                            setOperator(LOAD);
                            const {id, token} = await getAuth();
                            eventApi
                                .get(eventSeacrh, {id, token})
                                .then((response) => {
                                    let { data } = response.data
                                    setEvents(data)
                                    console.log(data)
                                    setOperator(LIST);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }}>
                        <Ionicons name="search" size={24} color="white" />
                    </Button>
                    <Button paddingLeft={5} paddingRight={5} colorScheme="success" flexGrow={1}
                        onPress={() => setOperator(ADD)}>
                        <Ionicons name="add" size={24} color="white" />
                    </Button>
                    <Button paddingLeft={5} paddingRight={5} colorScheme="yellow" flexGrow={1}
                        onPress={() => setEventSearch({ name: '', month: 0 })}>
                        <Ionicons name="refresh" size={24} color="black" />
                    </Button>
                </Stack>
            </Stack>
        </Center>
    )
}