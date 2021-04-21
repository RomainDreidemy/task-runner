import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorageService {
    async set(key, value, isObj = false)
    {
        if(isObj)
            await AsyncStorage.setItem(key, JSON.stringify(value));
        else
            await AsyncStorage.setItem(key, value);
    }

    async get(key, isObj = false)
    {
        if(isObj)
            return JSON.parse(await AsyncStorage.getItem(key))
        else
            return await AsyncStorage.getItem(key)
    }
}

export default new LocalStorageService();
