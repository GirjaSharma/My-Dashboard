import {useAuth0} from "@auth0/auth0-react";

export const LogoutButton=()=>{
    const {logout: auth0Logout}= useAuth0();

    return (
        <button onClick={() =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } })}
        className="button logout"
        >
            Logout
        </button>
    )
}
