import React, {useState, useEffect} from 'react';
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
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    let fn = async () => {
 
      const {token,id} = await getAuth()

      if (token == null || id == null){
        error("User isn't logger");
        setLoading(false);
        return
      }
      
      userApi.token(id, token)
      .then(async (response) => {
        setUser(user)
        setLoading(false)
      })
      .catch(async (err) =>{
        error(err)
        setLoading(false)
      })
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
