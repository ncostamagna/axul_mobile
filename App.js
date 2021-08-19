import React, {useState} from 'react';
import Navigation from './app/navigation/Navigation';
import Login from './app/page/Login/Login'
import { NativeBaseProvider, Text, Box } from 'native-base';

export default function App() {

  [user, setUser] = useState(null)

  let app = user ? <Navigation 
                  user={user}
                  setUser={setUser}
                  /> : 
                  <Login 
                  user={user}
                  setUser={setUser}
                  />

    return (
      <NativeBaseProvider>
        {app}
      </NativeBaseProvider>
    )
}
