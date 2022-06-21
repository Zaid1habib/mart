import React from 'react'
import { GoogleLogin } from 'react-google-login';

const GoogleSign = () => {
    const responseGoogle = (response) => {
        console.log(response , "success");
    }
    const fail = (failed) =>{
        
        console.log(failed , "fail's");
    }
    return (
        <div>
            <GoogleLogin
                clientId="833643574965-o9uvl4db461mp242m9bbbqbfb735s6cd.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={fail}
                cookiePolicy={'single_host_origin'}
                uxMode="redirect"
                scope="profile"
            />
        </div>
    )
}

export default GoogleSign