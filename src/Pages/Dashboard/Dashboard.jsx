export default function Dashboard(logout, user){
    return (
        <div>
            <button onClick={logout}>Logout</button>
            <h1>Welcome to the Dashboard of Party Point</h1>
            <p>Logged in as {user.email}</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}