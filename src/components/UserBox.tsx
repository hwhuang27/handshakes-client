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
const ActiveContainer = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid #9DC08B;
    background-color: #D3E4CD;
    border-left: 6px solid #609966;
    transition: all .1s ease-in;
`

const Avatar = styled.img`
    margin-left: 1rem;
`

const UserName = styled.p`
    flex: 1;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: #40513B;
    padding: 22px 16px;
`

interface UserBoxProps {
    id: string,
    firstName: string,
    lastName: string,
    avatar: string,
    activeUser: string,
    onClick: any,
}

function UserBox({id, firstName, lastName, avatar, activeUser, onClick} : UserBoxProps){
    const imagePath = `src/assets/${avatar}.png`;

    if(id === activeUser){
        return(
            <ActiveContainer>
                <Avatar src={imagePath} alt='avatar' />
                <UserName>{firstName} {lastName}</UserName>
            </ActiveContainer>
        )
    } else {
        return(
            <Container onClick={() => onClick(id)}>
                <Avatar src={imagePath} alt='avatar' />
                <UserName>{firstName} {lastName}</UserName>
            </Container>
        )
    }
}
export default UserBox;