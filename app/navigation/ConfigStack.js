import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Config from "../page/Config/Config"

const Stack = createNativeStackNavigator();

export default function ConfigStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="config"
        component={Config}
        options={{ title: "Config" }}
      />
    </Stack.Navigator>
  );
}