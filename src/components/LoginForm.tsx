import { Link } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import styled from 'styled-components';

const StyledForm = styled.form`
    background-color: white;
    padding: 20px 40px;
    border-radius: 24px;
`
const FormContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ForgotWrapper = styled.div`
  text-align: right;
  margin: 2px 0 12px;
`
const ForgotLink = styled(Link)`
  font-size: 14px;
  color: #609966;
  transition: all .1s ease-in-out;
  &:hover {
  color: #40513B;
}
`
const SignupText = styled.p`
  display: inline;
  font-size: 16px;
`
const SignupLink = styled(Link)`
  font-size: 16px;
  color: #609966;
  margin-left: 6px;
  transition: all .1s ease-in-out;

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

function LoginForm() {
    return (
        <StyledForm>
            <img src="/logo64.png" alt="Logo" />

            <FormContentWrapper>
                <Input
                    label='Email'
                    type='email'
                    id='email'
                    name='email'
                />
                <Input
                    label='Password'
                    type='password'
                    id='password'
                    name='password'
                />

                <ForgotWrapper>
                    <ForgotLink to='/login'>Forgot Password?</ForgotLink>
                </ForgotWrapper>

                <Button type='submit' text='Login' />

                <div>
                    <SignupText>Don't have an account?</SignupText>
                    <SignupLink to='/register'>Sign Up</SignupLink>
                </div>

                <LineBreak><LineBreakSpan>Alternatively</LineBreakSpan></LineBreak>
                <Button type='button' text='Try Demo User' />

                {/* <p><span>Or login with</span></p> */}
            </FormContentWrapper>
        </StyledForm>
    )
}

export default LoginForm;