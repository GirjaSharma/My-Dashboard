export default function LandingPage(signup, login){
    return(
        <>
        <h1>Party Pilot</h1>
        <p>Come celebrate with us.</p>
        <button onClick={signup}>Signup</button>

      <button onClick={login}>Login</button>
        </>
    )
}