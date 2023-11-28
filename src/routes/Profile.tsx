import styled, { createGlobalStyle } from 'styled-components';
import Navbar from '../components/Navbar';
import EditProfile from '../components/EditProfile';

const PageWrapper = styled.div`
    background-color: white;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    color: #40513B;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.7' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23FFFFFF'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23FFFFFF'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(37.25) translate(-973.15 -729.87)'%3E%3Cg fill='%23FFFFFF'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
`
const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Lato', sans-serif;  
    box-sizing: border-box;
    list-style-type: none;
}

#root{
    flex: 1;
}

body {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    min-width: 100%;

    // color: #40513B;
    // background-color: #8EC3B0;
    // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%238EC3B0' width='11' height='11'/%3E%3Crect fill='%238fc4b0' x='10' width='11' height='11'/%3E%3Crect fill='%2391c5b0' y='10' width='11' height='11'/%3E%3Crect fill='%2392c5b0' x='20' width='11' height='11'/%3E%3Crect fill='%2393c6b0' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%2395c7b0' y='20' width='11' height='11'/%3E%3Crect fill='%2396c8b1' x='30' width='11' height='11'/%3E%3Crect fill='%2397c9b1' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%2399cab1' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%239acab1' y='30' width='11' height='11'/%3E%3Crect fill='%239ccbb1' x='40' width='11' height='11'/%3E%3Crect fill='%239dccb1' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%239ecdb1' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23a0ceb1' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23a1ceb1' y='40' width='11' height='11'/%3E%3Crect fill='%23a3cfb1' x='50' width='11' height='11'/%3E%3Crect fill='%23a4d0b1' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23a6d1b2' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23a7d1b2' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23a9d2b2' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23aad3b2' y='50' width='11' height='11'/%3E%3Crect fill='%23acd4b2' x='60' width='11' height='11'/%3E%3Crect fill='%23aed4b2' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23afd5b2' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23b1d6b2' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23b2d7b2' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23b4d7b3' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23b6d8b3' x='70' width='11' height='11'/%3E%3Crect fill='%23b7d9b3' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23b9dab3' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23bbdab3' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23bcdbb3' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23bedcb3' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23c0ddb4' x='80' width='11' height='11'/%3E%3Crect fill='%23c1ddb4' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23c3deb4' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23c5dfb4' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23c6dfb4' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23c8e0b4' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23cae1b5' x='90' width='11' height='11'/%3E%3Crect fill='%23cce2b5' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23cde2b5' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23cfe3b5' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23d1e4b6' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23d3e4b6' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23d4e5b6' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23d6e6b6' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23d8e6b7' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23dae7b7' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23dce8b7' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23dde8b8' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23dfe9b8' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23e1eab8' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23e3eab9' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23e5ebb9' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23e7ebb9' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23e8ecba' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23eaedba' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23ecedbb' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23EEB' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
    // background-attachment: fixed;
    // background-size: cover;
    // user-select: none;
}
`
function Profile() {
    const firstName = localStorage.getItem('firstName') ?? "";
    const lastName = localStorage.getItem('lastName') ?? "";
    const avatar = localStorage.getItem('avatar') ?? "";

    return (
        <PageWrapper>
            <GlobalStyle />
            <Navbar
                firstName={firstName}
                lastName={lastName}
                avatar={avatar}
            />

            <EditProfile />

        </PageWrapper>
    )
}

export default Profile;