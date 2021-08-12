import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "../page/Profile/Profile"

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
}