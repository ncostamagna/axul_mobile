import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from "react-native-elements"
import CalendarStack from './CalendarStack';
import ContactStack from './ContactStack';
import EventStack from './EventStack';
import ProfileStack from './ProfileStack';
import ConfigStack from './ConfigStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="candelar-stack"
        tabBarOptions={{
            inactiveTintColor: "#646464",
            activeTintColor: "#00a680",
        }}
        screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route, color),
            tabBarLabel:() => {return null},
        })}
      >
        <Tab.Screen 
            name="contact-stack" 
            component={ContactStack} 
            options={{
                title: "Contact",
            }}/>
        <Tab.Screen 
            name="event-stack" 
            component={EventStack} 
            options={{
                title: "Event",
            }}/>
        <Tab.Screen 
            name="calendar-stack" 
            component={CalendarStack} 
            options={{
                title: "Calendar",
            }}/>
        <Tab.Screen 
            name="profile-stack" 
            component={ProfileStack} 
            options={{
                title: "Profile",
            }}/>
        <Tab.Screen 
            name="config-stack" 
            component={ConfigStack} 
            options={{
                title: "Configuration",
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(router, color){
    let iconName;

    switch(router.name) {
        case "contact-stack":
            iconName = "calendar-account";
            break;
        case "event-stack":
            iconName = "calendar-edit";
            break;
        case "calendar-stack":
            iconName = "calendar";
            break;
        case "profile-stack":
            iconName = "account";
            break;
        case "config-stack":
            iconName = "cog";
            break;
        default:
            break;
    }

    return (
        <Icon type="material-community" name={iconName} size={30} color={color} />
    )
}