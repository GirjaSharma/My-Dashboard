import {useAuth0} from "@auth0/auth0-react";
import '../../Pages/LandingPage/LandingPage.css'
export const SignupButton=()=>{

    const { loginWithRedirect } = useAuth0();

    return (
        <button  className="login-button login-button-primary" onClick ={() =>
    loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
    })}>
          Create Account
        </button>
    )
}