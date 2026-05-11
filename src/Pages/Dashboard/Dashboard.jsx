import {LogoutButton} from '../../Components/AuthButtons/LogoutButton' ;
import Sidebar from '../../Components/Layout/Sidebar';
export default function Dashboard( user){
    console.log("user", user)
    return (
        <div className="min-h-screen bg-bg">
            <div className="flex h-screen overflow-hidden">
                
            {/* <h1>Welcome to the Dashboard of Party Point</h1> */}
            {/* <p>Logged in as {user.user.email}</p> */}
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <Sidebar/>
            </div>
             <LogoutButton/>
            {/* <div className=""></div> */}
           
        </div>
    )
}