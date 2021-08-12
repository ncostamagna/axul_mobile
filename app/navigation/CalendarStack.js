import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from "../page/Calendar/Calendar"

const Stack = createNativeStackNavigator();

export default function CalendarStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="calendar"
        component={Calendar}
        options={{ title: "Calendar" }}
      />
    </Stack.Navigator>
  );
}