import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './app/navigation/Navigation';
import Login from './app/page/Login/Login'
import { NativeBaseProvider, Text, Box } from 'native-base';
import {Users} from './app/utils/api'
import { Spinner } from './app/components';
import error from './app/utils/error'


export default function App() {

  const userApi = new Users();
  [user, setUser] = useState(null)
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    let fn = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token == null) {
          setLoading(false)
          return
        }
  
        const jsonValue = await AsyncStorage.getItem('user')
        if (jsonValue == null){
          setLoading(false)
          return
        }
        const user = JSON.parse(jsonValue);
  
      userApi.token(user.id, token)
      .then(async (response) => {
        setUser(user)
        setLoading(false)
      })
      .catch(async (err) =>{
        error(err)
        setLoading(false)
      })
      } catch(e) {}
    }

    fn();


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
