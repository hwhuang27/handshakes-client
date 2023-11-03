import { Link } from 'react-router-dom';
import TextInput from "./TextInput";
import Button from "./Button";

function SignupForm() {
    return (
        <form>
            <img src="/logo64.png" alt="Logo" />

            <TextInput
                label='Email'
                type='email'
                id='email'
                name='email'
            />
            <TextInput
                label='First Name'
                type='text'
                id='firstName'
                name='firstName'
            />
            <TextInput
                label='Last Name'
                type='text'
                id='lastName'
                name='lastName'
            />
            <TextInput
                label='Password'
                type='password'
                id='password'
                name='password'
            />
            <TextInput
                label='Confirm Password'
                type='password'
                id='confirmPassword'
                name='confirmPassword'
            />
            
            {/* Avatar dropdown component goes here */}

            <Button type='submit' text='Sign Up' />

            <div>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
            </div>
        </form>
    )
}

export default SignupForm;