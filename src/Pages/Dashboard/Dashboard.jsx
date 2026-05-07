import {LogoutButton} from '../../Components/AuthButtons/LogoutButton' 
export default function Dashboard( user){
    console.log("user", user)
    return (
        <div>
            <LogoutButton/>
            <h1>Welcome to the Dashboard of Party Point</h1>
            <p>Logged in as {user.user.email}</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}