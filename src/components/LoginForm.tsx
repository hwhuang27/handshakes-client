import { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import FormButton from './FormButton';
import styled from 'styled-components';

const StyledForm = styled.form`
    font-family: 'Coming Soon', cursive;
    background-color: white;
    padding: 20px 40px;
    border: 10px outset #9DC08B;
    border-radius: 24px;
`
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const HeaderText = styled.p`
    color: #739072;
    font-size: 40px;
    letter-spacing: 0.1rem;
    margin: 8px 0 16px;
    transition: all .1s ease-in-out;

    &:hover {
    scale: 1.05;
}
`
const FormContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const ForgotWrapper = styled.div`
  text-align: right;
  margin: 6px 0 12px;
`
const ForgotLink = styled(Link)`
  font-size: 16px;
  color: #609966;
  transition: all .15s ease-in-out;

    &:hover {
    color: #40513B;
}
`
const SignupText = styled.p`
  display: inline;
  font-size: 16px;
`
const SignupLink = styled(Link)`
  font-size: 17px;
  color: #609966;
  margin-left: 6px;
  transition: all .15s ease-in-out;

  &:hover {
    color: #40513B;
  }
`
const LineBreak = styled.p`
    color: #64748b;
    font-size: 14px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #64748b;
    line-height: 0.1em;
    margin: 24px 0 20px;
`
const LineBreakSpan = styled.span`
    background: #fff;
    padding: 8px;
`
const ErrorMessage = styled.p`
    color: #ef4444;
    margin: 0 0 4px;
`
function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (email === "" || password === "") {
                setError('Fields cannot be empty');
                throw new Error('Fields cannot be empty');
            }
            const res = await fetch(`https://messenger-api-production.up.railway.app/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            
            if(res.status === 200){
                const result = await res.json();
                setError("");
                localStorage.setItem("token", result.token);
                navigate('/');
            } else{
                setError('Invalid username or password');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <HeaderWrapper>
                <HeaderText>Messenger</HeaderText>
            </HeaderWrapper>
            
            <FormContentWrapper>
                <FormInput
                    label='Email'
                    type='email'
                    id='email'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
                <FormInput
                    label='Password'
                    type='password'
                    id='password'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />

                <ForgotWrapper>
                    <ForgotLink to='/login'>Forgot Password?</ForgotLink>
                </ForgotWrapper>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <FormButton type='submit' text='Login' />

                <div>
                    <SignupText>Don't have an account?</SignupText>
                    <SignupLink to='/register'>Sign Up</SignupLink>
                </div>

                <LineBreak><LineBreakSpan>Alternatively</LineBreakSpan></LineBreak>
                <FormButton type='button' text='Try Demo User' />

            </FormContentWrapper>
        </StyledForm>
    )
}

export default LoginForm;