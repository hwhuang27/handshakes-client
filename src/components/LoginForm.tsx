import { Link } from 'react-router-dom';
import TextInput from "./TextInput";
import Button from "./Button";

function LoginForm() {
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
                label='Password'
                type='password'
                id='password'
                name='password'
            />

            <div>
                <Link to='/'>Forgot password?</Link>
            </div>

            <Button type='submit' text='Login' />

            <div>
                <p>Don't have an account?</p>
                <Link to='/register'>Sign Up</Link>
            </div>

            <p><span>Or try the</span></p>
            <Button type='button' text='Demo User' />

            {/* <p><span>Or login with</span></p> */}
        </form>
    )
}

export default LoginForm;