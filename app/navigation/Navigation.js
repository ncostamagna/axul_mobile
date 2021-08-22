import * as React from 'react';
import { Text, StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from "react-native-elements"
import CalendarStack from './CalendarStack';
import ContactStack from './ContactStack';
import EventStack from './EventStack';
import ProfileStack from './ProfileStack';
import ConfigStack from './ConfigStack';
import {BASE_BLUE} from '../properties/properties'

const OPTION_SCREEN = {
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: BASE_BLUE,
      },
    headerTintColor: "#FFFFFF"
};

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="calendar-stack"
        screenOptions={({route}) => ({
            tabBarIcon: ({color, focused}) => screenIcon(route, focused, color),
            tabBarLabel:({focused, color}) => screenText(route,color, focused),
            inactiveTintColor: "#484848",
            activeTintColor: BASE_BLUE,
            headerTitleStyle: { alignSelf: 'center' },
            tabBarStyle:{
                paddingTop: 5,
                height: 55
            },
        })}
      >
        <Tab.Screen 
            name="contact-stack" 
            component={ContactStack} 
            options={{
                ...OPTION_SCREEN,
                title:"Contact"
            }}/>
        <Tab.Screen 
            name="event-stack" 
            component={EventStack} 
            options={{
                ...OPTION_SCREEN,
                title: "Event",
            }}/>
        <Tab.Screen 
            name="calendar-stack" 
            component={CalendarStack} 
            options={{
                ...OPTION_SCREEN,
                title: "Calendar",
            }}/>
        <Tab.Screen 
            name="profile-stack" 
            component={ProfileStack} 
            options={{
                ...OPTION_SCREEN,
                title: "Profile",
            }}/>
        <Tab.Screen 
            name="config-stack" 
            component={ConfigStack} 
            options={{
                ...OPTION_SCREEN,
                title: "Configuration",
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenIcon(router, focused, color){
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


function screenText(router, color, focused){
    let label;

    if (focused) {
        switch(router.name) {
            case "contact-stack":
                label = "Contact";
                break;
            case "event-stack":
                label = "Event";
                break;
            case "calendar-stack":
                label = "Calendar";
                break;
            case "profile-stack":
                label = "Profile";
                break;
            case "config-stack":
                label = "Config";
                break;
            default:
                break;
        }

        return (
            <Text style={styles.activeColor}>{label}</Text>
         )
    }
    
    return null
    
}

const styles = StyleSheet.create({
    activeColor: {
      color: BASE_BLUE,
      fontSize: 11,
      paddingBottom: 4,
    },
});