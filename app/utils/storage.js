import AsyncStorage from '@react-native-async-storage/async-storage';

const storeAuth = async (token, user) => {
    try {
        await AsyncStorage.setItem('token', token);
        
        const jsonValue = JSON.stringify(user)
        await AsyncStorage.setItem('user', jsonValue)
        
      } catch (error) {

      }
}

const getAuth = async () => {
    let data = {token:null, id:null, user:null}
    try {
        data.token = await AsyncStorage.getItem('token');
        if (data.token == null) {
          return data
        }
  
        const jsonValue = await AsyncStorage.getItem('user')
        if (jsonValue == null){
            return data
        }
        data.user = JSON.parse(jsonValue);
        data.id = data.user.id
        return data
        } catch(e) {}
    return data
}


export {storeAuth, getAuth}