import { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import AvatarSelect from './AvatarSelect';
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
    const [avatar, setAvatar] = useState("panda");
    const [error, setError] = useState("");

    console.log(avatar);

    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPass === "") {
                setError('Fields cannot be empty');
                throw new Error('Fields cannot be empty');
            } else if (password !== confirmPass) {
                setError('Passwords do not match');
                throw new Error('Passwords do not match');
            }
            const res = await fetch(`https://messenger-api-production.up.railway.app/auth/register`, {
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
                    avatar: avatar,
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
                <FormInput
                    label='Email'
                    type='email'
                    id='email'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
                <FormInput
                    label='First Name'
                    type='text'
                    id='firstName'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                />
                <FormInput
                    label='Last Name'
                    type='text'
                    id='lastName'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                />
                <FormInput
                    label='Password'
                    type='password'
                    id='password'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                <FormInput
                    label='Confirm Password'
                    type='password'
                    id='confirmPassword'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPass(e.target.value)}
                />
                
                <AvatarSelect
                    value={avatar}
                    label='Select Avatar'
                    id='avatar'
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setAvatar(e.target.value)}
                />

                {error && <ErrorMessage>{error}</ErrorMessage>}
  
                <FormButton type='submit' text='Sign Up' />

                <div>
                    <LoginText>Already have an account?</LoginText>
                    <LoginLink to='/login'>Login</LoginLink>
                </div>
            </FormContentWrapper>
        </StyledForm>
    )
}

export default SignupForm;