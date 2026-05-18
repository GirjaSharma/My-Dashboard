
import Sidebar from '../../Components/Layout/Sidebar';
import Header from '../../Components/Layout/Header'; 


export default function Dashboard( user){
    console.log("user", user)
    return (
        <div className="min-h-screen bg-bg text-text-main ml-2 mr-4">
            <div className="flex h-screen overflow-hidden">
                
            {/* <h1>Welcome to the Dashboard of Party Point</h1> */}
            {/* <p>Logged in as {user.user.email}</p> */}
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <Sidebar/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header user={user}/>
            </div>
             
            </div>
            
            {/* <div className=""></div> */}
           
        </div>
    )
}