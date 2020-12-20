
import React, {useState} from 'react';
import axios from 'axios';

const LoginHelper = (BaseUrl, HandleLogin) => {
    const [FormLogin, setFormLogin] = useState({
        email : '', password : ''
    })
    const [LoadingButton, setLoadingButton] = useState(false);
    const LoginUser = async () => {
        setLoadingButton(true);
        await axios({
            method: 'post',
            url: `${BaseUrl}/api/login`,
            data: FormLogin,
            config: { headers: {
                    'Accept': 'application/json'
                }}
        }).then(res => {
            HandleLogin(res.data.token)
        }).catch(function (error) {
            if(error.response){
                alert(error.response.data.error)
            }
        });
        setLoadingButton(false);
    }

    return {
        LoginUser, LoadingButton, FormLogin, setFormLogin
    }
}

export default LoginHelper;