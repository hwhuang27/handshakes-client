import styled from 'styled-components';

import UserBox from './UserBox'

const Container = styled.div`
    flex: 1;
    border-right: 2px solid #9DC08B;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 82px);
    overflow: auto;
    background-color: #EDF1D6;
`

interface SidebarProps {
    firstName: string,
    lastName: string,
    avatar: string,
}

function Sidebar({ firstName, lastName, avatar }: SidebarProps) {
    // replace with fetched user
    const userList = ['/login', '/login']

    return (
        <Container>

            <UserBox 
                id={userList[0]}
                firstName={firstName}
                lastName={lastName}
                avatar={avatar}
            />

            <UserBox
                id={userList[1]}
                firstName={firstName}
                lastName={lastName}
                avatar={avatar}
            />


        </Container>
    )
}

export default Sidebar;