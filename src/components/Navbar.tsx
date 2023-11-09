
import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`

const UserList = styled.div`
    background-color: red;
`
const ChatWindow = styled.div`
    background-color: blue;
`

function NavBar() {

    return (
        <ContentWrapper>
            <UserList>

            </UserList>
            
            <ChatWindow>

            </ChatWindow>

        </ContentWrapper>
    )
}

export default NavBar;
