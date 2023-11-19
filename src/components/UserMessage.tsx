
import styled from 'styled-components';

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 2px solid #9DC08B;
    background-color: white;
    
    transition: all .1s ease-in;

`
const UserName = styled.p`
    flex: 1;
    font-size: 18px;
    font-weight: bold;
    // text-align: left;
    padding: 8px 0px 0px 48px;
`

const Message = styled.p`
    flex: 1;
    font-size: 18px;
    // text-align: left;
    padding: 4px 24px 8px 48px;
`

interface UserMessageProps {
    firstName: string,
    lastName: string,
    message: string,
}

function UserMessage({ firstName, lastName, message}: UserMessageProps) {

    return (
        <Container>
            <UserName>{firstName} {lastName}</UserName>
            <Message>{message}</Message>
        </Container>
    )
}
export default UserMessage;