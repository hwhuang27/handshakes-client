
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Lato', sans-serif;  
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
`
const Container = styled.nav`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 2px solid #9DC08B;
`
const LeftGroup = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 36px;
    gap: 16px;
`

const StyledLink = styled(Link)`
    font-size: 22px;
    font-weight: bold;
    font-style: italic;

    color: black;
    padding: 8px 24px;
    margin: 0;
    border-radius: 36px;

    transition: all .1s ease-in-out;
    &:hover {
        background-color: #9DC08B;
        color: white;
    }
`
const NavHeader = styled.p`
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 0.1rem;
    color: #65a30d;
    user-select: none;
    margin: 4px 0;
`
const RightGroup = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`
const NavName = styled.p`
    font-size: 22px;
    font-weight: bold;
    color: black;
    padding: 8px 16px;
    margin: 12px 16px 12px 0;
`
const Avatar = styled.img`
`
interface NavProps {
    firstName: string,
    lastName: string,
    avatar: string,
}

function NavBar({firstName, lastName, avatar}: NavProps) {
    const imagePath = `src/assets/${avatar}.png`
    
    return (
        <Container>
            <GlobalStyle />

            <LeftGroup>
                <StyledLink to='/'>Chat</StyledLink>
                <StyledLink to='/'>Profile</StyledLink>
            </LeftGroup>

            <NavHeader>Messenger</NavHeader>

            <RightGroup>
                <Avatar src={imagePath} alt='avatar'/>
                <NavName>{firstName} {lastName}</NavName>
                <StyledLink to='/login'>Logout</StyledLink>
            </RightGroup>

        </Container>
    )
}

export default NavBar;