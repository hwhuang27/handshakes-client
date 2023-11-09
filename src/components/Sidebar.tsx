import styled from 'styled-components';
import { Link } from 'react-router-dom'
const Container = styled.div`
    min-height: 100vh;
    border-right: 2px solid #9DC08B;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
`

const Header = styled.p`
    font-size: 44px;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 30px;
`
const NavItem = styled(Link)`
  font-size: 24px;
  font-weight: 400;
  color: #609966;
  padding: 20px 0;
  margin: 0;
  transition: all .1s ease-in-out;

    &:hover {
    color: white;
    background-color: #609966;
}
`
function Sidebar() {

    return (
        <Container>
            <Header>Messenger</Header>
            <NavItem to='/'>Chat</NavItem>
            <NavItem to='/'>Profile</NavItem>
            <NavItem to='/'>Logout</NavItem>
        </Container>
    )
}

export default Sidebar;