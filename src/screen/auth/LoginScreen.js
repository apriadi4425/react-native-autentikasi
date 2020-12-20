import React, {useContext} from 'react';
import {View, Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../../provider/AuthProvider';
import LoginHelper from './LoginHelper';


const FormText = ({Label, value, onChangeText}) => {
    return(
        <View style={{marginHorizontal : 10, marginTop : 20, marginBottom : 10}}>
        <View>
            <Text style={{marginBottom : -10, fontSize : 15}}>{Label}</Text>
            <TextInput 
                value={value}
                secureTextEntry={Label === 'Password'}
                onChangeText={onChangeText}
                style={{width : '100%', borderBottomColor : 'black', borderBottomWidth : 1, fontSize : 15, color : 'grey'}}
            />
        </View>
        
    </View>
    )
}

const LoginScreen = () => {
    const {BaseUrl, HandleLogin} = useContext(AuthContext)
    const {LoginUser, LoadingButton, FormLogin, setFormLogin} = LoginHelper(BaseUrl, HandleLogin);

    return (
        <View style={{flex : 1}}>
            <View style={{height: 50, backgroundColor : 'green'}}></View>
            <View>
                <View style={{alignItems : 'center', marginTop : 20}}>
                    <Text>Login Screen</Text>
                </View>

                <FormText Label='Email' value={FormLogin.email} onChangeText={(text) => setFormLogin({...FormLogin, email : text})}/>
                <FormText Label='Password' value={FormLogin.password} onChangeText={(text) => setFormLogin({...FormLogin, password : text})}/>

                <View style={{marginHorizontal : 10, marginTop : 10}}>
                    <Button title={!LoadingButton ? "Log In" : "Loading..."} onPress={LoginUser} disabled={LoadingButton}/>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen;