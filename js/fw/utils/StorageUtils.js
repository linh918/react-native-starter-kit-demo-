import { AsyncStorage } from 'react-native';

export default class StorageUtils {

    /**
     * @param key : key define unique data
     * @callback onSuccess , onFailure
     * @return Promise
     */
    static readAsyncData = async (key, onSuccess, onFailure) => {
        try {
            AsyncStorage.getItem(key, (error, result) => {
                onSuccess(result)
            })
        }
        catch (error) {
            onFailure("Cannot read storage")
        }
    }

    /**
     * @param key
     * @param value
     * @callback onSucess, onFailure
     * @return Promise
     */
    static writeAsyncData = async (key, value, onSuccess, onFailure) => {
        try {
            AsyncStorage.setItem(key, value, (error) => {
                if (error != null) {
                    onFailure(error)
                }
                else onSuccess()
            })
        }
        catch (error) {
            onFailure(error)
        }
    }


    /**
     * Implements on application's first run
     * @callback onFirstRun
     */
    static handleFirstRun = async (onFirstRun) => {
        try {
            var v = await AsyncStorage.getItem("@unique_key_yourapplication:key");
            if (v == null) {
                await AsyncStorage.setItem("@unique_key_yourapplication:key", "already");
                onFirstRun();
            }
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * 
     * @callback Error~handleError 
     */
    static clearAllAsyncData(handleError) {
        AsyncStorage.clear((error) => {
            handleError(error)
        })
    }
}