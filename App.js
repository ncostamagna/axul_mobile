import React, {useState} from 'react';
import Navigation from './app/navigation/Navigation';
import Login from './app/page/Login/Login'

export default function App() {

  [user, setUser] = useState(null)

  return user ? <Navigation 
                  user={user}
                  setUser={setUser}
                  /> : 
                  <Login 
                  user={user}
                  setUser={setUser}
                  />
}
