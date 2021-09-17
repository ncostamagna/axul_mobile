import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function(err) {
   console.log(err);

   try {
    console.log("remove user storage")
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
  }
  catch(exception) {
    console.log(exception)
  }
}