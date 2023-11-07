import { useState } from 'react';
import { Link } from 'react-router-dom';
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

function SignupForm() {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPass, setConfirmPass] = useState("");

    return (
        <StyledForm>
            <HeaderWrapper>
                <HeaderText>Sign Up</HeaderText>
            </HeaderWrapper>

            <FormContentWrapper>
                <Input
                    label='Email'
                    type='email'
                    id='email'
                    name='email'
                />
                <Input
                    label='First Name'
                    type='text'
                    id='firstName'
                    name='firstName'
                />
                <Input
                    label='Last Name'
                    type='text'
                    id='lastName'
                    name='lastName'
                />
                <Input
                    label='Password'
                    type='password'
                    id='password'
                    name='password'
                />
                <Input
                    label='Confirm Password'
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                />
                
                {/* Avatar dropdown component goes here */}

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