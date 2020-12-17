import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import { AuthContext } from '../provider/AuthProvider';

const AppStack = () => {
	const {User, IsLogin, Loading, DoLogout} = useContext(AuthContext)

    return(
		Loading ?
            null
            :
            IsLogin ?
                <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>Main Stack</Text>
                </View>
                            :
                <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>Login Screen</Text>
                </View>
    )
}

export default AppStack;