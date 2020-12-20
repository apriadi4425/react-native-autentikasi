import React, { useContext } from 'react';
import {View, Text, Button} from 'react-native';
import { AuthContext } from '../provider/AuthProvider';
import LoginScreen from '../screen/auth/LoginScreen';

const AppStack = () => {
	const {User, IsLogin, Loading, DoLogout} = useContext(AuthContext)

    return(
		Loading ?
            null
            :
            IsLogin ?
                <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                    <Text style={{marginBottom : 10}}>Selamat Datang</Text>
                    <Button title={"Log-Out"} onPress={DoLogout}/>
                </View>
                            :
                <LoginScreen/>
    )
}

export default AppStack;