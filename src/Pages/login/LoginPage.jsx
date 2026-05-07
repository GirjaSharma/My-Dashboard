// import {useState} from 'react';
import {useState} from 'react';
import './LoginPage.css'
import InputForm from '../../Components/InputForm/InputForm';
const LoginPage=()=>{
    const [values, setValues] = useState({})

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Full Name",
            errorMessage: "Username should be 5-20 characters and should not include any special character!",
            pattern: "^[a-zA-Z0-9]{5-20}$",
            required: true
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be at least 10 characters long and include at least 1 letter , 1 number and 1 special character!",
            // pattern: "^$",
            required: true
        }
    ]

     const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const onChange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value});
    }

    return (
        <div className="login">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                {
                     inputs.map(input => (
                        <InputForm
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                         />
                     ))
                }
                
               
                
            </form>
            <button>Login</button>
        </div>
    )
}


export default LoginPage;