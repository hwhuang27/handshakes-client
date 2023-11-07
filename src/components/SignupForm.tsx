import { useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
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
    margin: 4px 0 12px;
`
const FormContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const LoginText = styled.p`
  display: inline;
  font-size: 16px;
`
const LoginLink = styled(Link)`
  font-size: 17px;
  color: #609966;
  margin-left: 6px;
  transition: all .15s ease-in-out;

  &:hover {
    color: #40513B;
  }
`
const ErrorMessage = styled.p`
    color: #ef4444;
    margin: 8px 0;
`

function SignupForm() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPass === "") {
                setError('Fields cannot be empty');
                throw new Error('Fields cannot be empty');
            } else if (password !== confirmPass) {
                setError('Passwords do not match');
                throw new Error('Passwords do not match');
            }
            let res = await fetch(`https://messenger-api-production.up.railway.app/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    password: password,
                    confirm_password: confirmPass,
                }),
            });

            if(res.status === 200){
                setError("");
                navigate("/login");
                console.log(`User registration successful.`);
            } else if (res.status === 400){
                setError(`This email is already registered!`);
                console.log(`Email is already registered.`);
            } else {
                setError(`Server error occured!`)
                console.log(`Server error occurred.`);
            }

        } catch(err){
            console.log(err);
        }
    }       

    return (
        <StyledForm onSubmit={handleSubmit}>
            <HeaderWrapper>
                <HeaderText>Sign Up</HeaderText>
            </HeaderWrapper>

            <FormContentWrapper>
                <Input
                    label='Email'
                    type='email'
                    id='email'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
                <Input
                    label='First Name'
                    type='text'
                    id='firstName'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                />
                <Input
                    label='Last Name'
                    type='text'
                    id='lastName'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                />
                <Input
                    label='Password'
                    type='password'
                    id='password'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                <Input
                    label='Confirm Password'
                    type='password'
                    id='confirmPassword'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPass(e.target.value)}
                />
                
                {/* Avatar dropdown component goes here */}

                {error && <ErrorMessage>{error}</ErrorMessage>}
  
                <Button type='submit' text='Sign Up' />

                <div>
                    <LoginText>Already have an account?</LoginText>
                    <LoginLink to='/login'>Login</LoginLink>
                </div>
            </FormContentWrapper>
        </StyledForm>
    )
}

export default SignupForm;