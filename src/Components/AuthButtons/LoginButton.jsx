import { useAuth0 } from "@auth0/auth0-react";
import '../../Pages/LandingPage/LandingPage.css'

export const LoginButton=()=>{
    const {loginWithRedirect}= useAuth0();

    return (
        <button className="login-button login-button-secondary" onClick={()=>loginWithRedirect()}
        >Login
        </button>
    )
}
