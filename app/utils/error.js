import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function(err) {
   console.log(err);

   try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
  }
  catch(exception) {}
}