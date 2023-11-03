import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function AuthForm({ formType }: { formType: 'login' | 'register'}) {    
    return (
    <div>
        {formType === 'login' && <LoginForm />}
        {formType === 'register' && <SignupForm />}
    </div>
    )
}

export default AuthForm;