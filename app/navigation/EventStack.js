import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Event from "../page/Event/Event"

const Stack = createNativeStackNavigator();

export default function EventStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="event"
        component={Event}
        options={{ title: "Event" }}
      />
    </Stack.Navigator>
  );
}