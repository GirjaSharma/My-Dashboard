import {LoginButton} from '../../Components/AuthButtons/LoginButton';
import {SignupButton} from '../../Components/AuthButtons/SignupButton';
import './LandingPage.css';

export default function LandingPage(){
    return(
        <div className="login-theme login-page">
            <section className="login-card">
                <div className="login-logo">CPR</div>
                <h1 className="login-title">Countryside Party Rentals</h1>
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