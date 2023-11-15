import { FormEvent } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
`

const ChatWindow = styled.div`
    flex: 1;
    background-color: #67e8f9;
`

const MessageBox = styled.form`
    flex-basis: 60px;  
    background-color: #a7f3d0;
    display: flex;
`

const StyledInput = styled.input`
    font-size: 20px;
    padding: 12px;
    margin: 12px;
    letter-spacing: 0.08rem;
    outline: 0;
    border-radius: 8px;
    border-width: 0 0 2px;
    border-color: #cbd5e1;

    flex: 1;

    transition: all .1s ease-in-out;
    &:focus {
        border-color: green;
    }
`

const StyledSubmit = styled.button`
    font-size: 18px;
    padding: 0 20px;
    margin: 12px 12px 12px 0;
    border: 2px solid white;
    background-color: white;
    color: w;
    
    transition: all .1s ease-in-out;

    &:hover {
    background-color: white;
    border: 2px solid #9DC08B;
    }

    &:focus {
    border: 2px solid #9DC08B;
    outline: none;
    }

    &:active{
        background-color: #EDF1D6;
        scale: 0.95;
    }
`

const OtherSubmit = styled.button`
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


function Chatbox(){
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    return(
        <Container>
            <ChatWindow/>


            <MessageBox onSubmit={handleSubmit}>
                <StyledInput
                    type='text'
                    id='messagebox'
                    placeholder='Type your message here..'
                ></StyledInput>

                <StyledSubmit>Send</StyledSubmit>
            </MessageBox>
        </Container>
    )
}

export default Chatbox;