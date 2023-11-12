import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(Link)`
    display: flex; 
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid #9DC08B;
    
    transition: all .1s ease-in;
    &:hover{
        background-color: #D3E4CD;
        border-left: 6px solid #609966;
    }
`
const Avatar = styled.img`
    margin-left: 1rem;
`

const UserName = styled.p`
    flex: 1;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: black;
    padding: 22px 16px;
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