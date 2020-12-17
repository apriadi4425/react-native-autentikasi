import React, {useState, useEffect, createContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
	const BaseUrl = 'URL API LOGIN';
    const [IsLogin, setIsLogin] = useState(false);
    const [User, setUser] = useState({});
    const [Loading, setLoading] = useState(true);

    const HandleLogin = async (res) => {
        try {
            await AsyncStorage.setItem('IsLogin', JSON.stringify(res));
            await setUser(res);
            setIsLogin(true)
        } catch (e) {
            alert(e);
        }
    }

    const DoLogout = async () => {
        try {
            await AsyncStorage.clear();
            await setIsLogin(false);
        } catch (e) {
            alert(e);
        }
    }

    const CheckIsLogin = async () => {
        try {
            const value = await AsyncStorage.getItem('IsLogin');
            if(value !== null){
                setIsLogin(true)
                setUser(JSON.parse(value))
            }
            setLoading(false)
        }catch (e) {
            alert(e);
        }
    }


    useEffect(() => {
        CheckIsLogin();
   
    },[])

    const AuthState = {User, IsLogin, HandleLogin, DoLogout, Loading, BaseUrl};
    return (
        <AuthContext.Provider value={AuthState}>
            {children}
        </AuthContext.Provider>
    )
}
