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
    userList: Object,
    activeUser: string,
    onClick: any,
}

function Sidebar({ userList, activeUser, onClick }: SidebarProps) {
    const users = [];
    for(const user of Object.values(userList)){
        users.push(user)
    };

    return (
        <Container>
            {
                Object.values(userList).map((user) => {
                    return(
                        <UserBox
                            key={user._id}
                            id={user._id}
                            firstName={user.first_name}
                            lastName={user.last_name}
                            avatar={user.avatar}
                            activeUser={activeUser}
                            onClick={onClick}
                        ></UserBox>
                    );
                })
            }
        
            {/* <UserBox 
                id={userList[0]}
                firstName={firstName}
                lastName={lastName}
                avatar={avatar}
            /> */}

        </Container>
    )
}

export default Sidebar;