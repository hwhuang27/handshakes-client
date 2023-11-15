
import styled from 'styled-components';

const Container = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid #9DC08B;
    background-color: white;
    
    transition: all .1s ease-in;
    &:hover{
        background-color: #D3E4CD;
        border-left: 6px solid #609966;
    }
`
const UserName = styled.p`
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: black;
    padding: 22px 16px;
`

interface UserMessageProps {
    firstName: string,
    lastName: string,
}

function UserMessage({ firstName, lastName }: UserMessageProps) {

    return (
        <Container>
            <UserName>{firstName} {lastName}</UserName>
        </Container>
    )
}
export default UserMessage;