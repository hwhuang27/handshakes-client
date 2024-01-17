import { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
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
    margin: 8px 0 0;
    transition: all .1s ease-in-out;

    &:hover {
    scale: 1.05;
}
`
const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Logo = styled.img`
    display: flex;
    justify-content: center;
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
const DemoButton = styled.button`
  margin: 4px 0 12px;
  background-color: #9DC08B;
  border: 3px solid #9DC08B;
  border-radius: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 6px 20px;
  transition: all .15s ease-in-out;

  &:hover {
  background-color: white;
  color: #9DC08B;
  border: 3px solid #9DC08B;
  }

  &:focus {
  border: 3px solid #9DC08B;
  outline: none;
  }
`
interface jwtDecoded {
    _id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    iat: number,
    exp: number,
}

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
                const decoded: jwtDecoded = jwtDecode(result.accessToken);
                localStorage.setItem('id', decoded._id);
                localStorage.setItem('email', decoded.email);
                localStorage.setItem('firstName', decoded.first_name);
                localStorage.setItem('lastName', decoded.last_name);
                localStorage.setItem('avatar', decoded.avatar);
                localStorage.setItem('token', result.accessToken);
                setError("");
                navigate('/chat');
            } else{
                setError('Invalid username or password');
            }

        } catch (error) {
            console.log(error);
        }
    }

    const handleDemo = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://messenger-api-production.up.railway.app/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: `demouser@demo.com`,
                    password: `demouser`,
                }),
            });

            if (res.status === 200) {
                const result = await res.json();
                const decoded: jwtDecoded = jwtDecode(result.accessToken);
                localStorage.setItem('id', decoded._id);
                localStorage.setItem('email', decoded.email);
                localStorage.setItem('firstName', decoded.first_name);
                localStorage.setItem('lastName', decoded.last_name);
                localStorage.setItem('avatar', decoded.avatar);
                localStorage.setItem('token', result.accessToken);
                setError("");
                navigate('/chat');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const logoUrl = `/handshakes-client/handshake64.png`;

    return (
        <StyledForm onSubmit={handleSubmit}>
            <LogoWrapper>
                <Logo src={logoUrl}></Logo>
            </LogoWrapper>
            <HeaderWrapper>
                <HeaderText>Handshakes</HeaderText>
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
                <DemoButton type='button' onClick={handleDemo}>Demo User</DemoButton>

            </FormContentWrapper>
        </StyledForm>
    )
}

export default LoginForm;