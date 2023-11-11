import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(Link)`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #9DC08B;
    
    transition: all .1s ease-in;
    &:hover{
        background-color: #D3E4CD;
        border-left: 6px solid #609966;
    }
`
const Avatar = styled.img`
    margin-left: 24px;
`

const UserName = styled.p`
    flex: 1;
    font-size: 22px;
    font-weight: bold;
    color: black;
    padding: 8px 16px;
    margin: 12px 16px 12px 0;
`

interface UserBoxProps {
    id: string,
    firstName: string,
    lastName: string,
    avatar: string,
}

function UserBox({id, firstName, lastName, avatar} : UserBoxProps){
    // const idPath = `/chat/${id}`
    const imagePath = `src/assets/${avatar}.png`;

    return (
        <Container to={id}>
            <Avatar src={imagePath} alt='avatar' />
            <UserName>{firstName} {lastName}</UserName>
        </Container>   
    )
}
export default UserBox;