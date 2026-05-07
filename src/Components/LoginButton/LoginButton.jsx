import {useAuthO} from '@authO/authO-react';

export const LoginButton=()=>{
    const {loginWithRedirect}= useAuthO();

    return (
        <button onClick={()=>loginWithRedirect()}
        className="button login"
        >
            Login
        </button>
    )
}
