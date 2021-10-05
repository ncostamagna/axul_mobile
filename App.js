import React, {useState, useEffect, useRef} from 'react';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import {getAuth} from './app/utils/storage'
import Navigation from './app/navigation/Navigation';
import Login from './app/page/Login/Login'
import { NativeBaseProvider, Text, Box } from 'native-base';
import {Users} from './app/utils/api'
import { Spinner } from './app/components';
import error from './app/utils/error'

export default function App() {

  const userApi = new Users();
  [user, setUser] = useState(null)
  /*const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();*/
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    let fn = async () => {
 
      const {token,id,user} = await getAuth()

      if (token == null || id == null){
        error("User isn't logger");
        setLoading(false);
        return
      }
      
      userApi.token(id, token)
      .then(async (response) => {
        console.log(response.data)
        setUser(user)
        setLoading(false)
      })
      .catch(async (err) =>{
        error(err)
        setLoading(false)
      })
    }

    fn();

    /*registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    console.log(expoPushToken)
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };*/

  }, []);

    let app = user ? <Navigation 
                    user={user}
                    setUser={setUser}
                    /> : 
                    <Login 
                    user={user}
                    setUser={setUser}
                    />

    if (loading) {
      app = <Spinner></Spinner>
    }
    return (
      <NativeBaseProvider>
        {app}
      </NativeBaseProvider>
    )
}

/*
async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}*/