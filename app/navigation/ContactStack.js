import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contact from "../page/Contact/Contact"

const Stack = createNativeStackNavigator();

export default function ContactStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{ title: "Contact" }}
      />
    </Stack.Navigator>
  );
}