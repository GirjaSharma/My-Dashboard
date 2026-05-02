import {useState} from 'react';
import InputForm from '../../Components/InputForm/InputForm';
import './SignUp.css'

const SignUp=()=>{
    const [values, setValues] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

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
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email Address",
            errorMessage: "It should be a valid email address!",
            // pattern: "\S+@\S+\.S+",
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
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "ConfirmPassword",
            errorMessage: "Passwords don't match!",
            pattern: values.password,
            required: true
        }
    ];

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const onChange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value});
    }

    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>
                {inputs.map((input) => (
                    <InputForm 
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    )


}

export default SignUp;