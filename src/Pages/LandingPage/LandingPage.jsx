import {LoginButton} from '../../Components/AuthButtons/LoginButton';
import {SignupButton} from '../../Components/AuthButtons/SignupButton'
export default function LandingPage(){
    return(
        <>
        <h1>Country Side Rentals</h1>
        <p>Come celebrate with us.</p>
        <SignupButton/>

      <LoginButton/>
        </>
    )
}