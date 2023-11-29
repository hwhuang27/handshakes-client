
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
    background-color: #EDF1D6;
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
    background-color: #9DC08B;
    color: white;
    padding: 6px 20px;
    margin: 0;
    border: 4px solid #EDF1D6;
    border-radius: 36px;

    transition: all .1s ease-in-out;
    &:hover {
        color: black;
        background-color: white;
        border: 4px solid #9DC08B;
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
    color: #40513B;
    padding: 8px 16px;
    margin: 12px 16px 12px 0;
`
const Avatar = styled.img`
`
interface NavProps {
    firstName: string | null,
    lastName: string | null,
    avatar: string | null,
}

function NavBar({firstName, lastName, avatar}: NavProps) {
    const imagePath = `src/assets/${avatar}.png`
    
    const logout = async () => {
        try {
            const response = await fetch(`https://messenger-api-production.up.railway.app/auth/logout`,
            {
                method: "POST",
            });
            if(!response.ok) throw new Error(`Error: Server error (logout)`);
            
            localStorage.clear();
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <GlobalStyle />

            <LeftGroup>
                <StyledLink to='/chat'>Chat</StyledLink>
                <StyledLink to='/profile'>Profile</StyledLink>
            </LeftGroup>

            <NavHeader>Messenger</NavHeader>

            <RightGroup>
                <Avatar src={imagePath} alt='avatar'/>
                <NavName>{firstName} {lastName}</NavName>
                <StyledLink to='/login' onClick={logout}>Logout</StyledLink>
            </RightGroup>

        </Container>
    )
}

export default NavBar;