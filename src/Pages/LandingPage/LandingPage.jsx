import {LoginButton} from '../../Components/AuthButtons/LoginButton';
import {SignupButton} from '../../Components/AuthButtons/SignupButton';
import './LandingPage.css';
import logo from '../../assets/countryside-logo.png';


export default function LandingPage(){
    return(
        <div className="login-theme login-page">
            <section className="login-card">
                <img
  src={logo}
  alt="Countryside Events & Party Rentals"
  className="login-logo"
/>
                <h1 className="login-title">Countryside Events & Party Rentals</h1>
                <p className="login-subtitle">Come celebrate with us.</p>
                <div className="login-actions">
                <SignupButton/>
              <LoginButton/>
         </div>
          <p className="login-auth-note">Secure Authentication powered by <strong>AuthO</strong>.</p>
            </section>
        
       
       

     
      {/* <p><MdLockOutline/> Secure Authentication with AuthO</p> */}

     
      
        </div>
    )
}