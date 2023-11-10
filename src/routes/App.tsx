import styled, { createGlobalStyle} from 'styled-components';
import '../components/App.css';
import NavBar from '../components/Navbar'

const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Lato', sans-serif;  
    box-sizing: border-box;
    list-style-type: none;
}

#root {
    width: 100%;
    min-height: 100vh;
    padding: 0;
    text-align: center;
}
  
body {
    color: #40513B;
    background-color: #8EC3B0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%238EC3B0' width='11' height='11'/%3E%3Crect fill='%238fc4b0' x='10' width='11' height='11'/%3E%3Crect fill='%2391c5b0' y='10' width='11' height='11'/%3E%3Crect fill='%2392c5b0' x='20' width='11' height='11'/%3E%3Crect fill='%2393c6b0' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%2395c7b0' y='20' width='11' height='11'/%3E%3Crect fill='%2396c8b1' x='30' width='11' height='11'/%3E%3Crect fill='%2397c9b1' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%2399cab1' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%239acab1' y='30' width='11' height='11'/%3E%3Crect fill='%239ccbb1' x='40' width='11' height='11'/%3E%3Crect fill='%239dccb1' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%239ecdb1' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23a0ceb1' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23a1ceb1' y='40' width='11' height='11'/%3E%3Crect fill='%23a3cfb1' x='50' width='11' height='11'/%3E%3Crect fill='%23a4d0b1' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23a6d1b2' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23a7d1b2' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23a9d2b2' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23aad3b2' y='50' width='11' height='11'/%3E%3Crect fill='%23acd4b2' x='60' width='11' height='11'/%3E%3Crect fill='%23aed4b2' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23afd5b2' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23b1d6b2' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23b2d7b2' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23b4d7b3' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23b6d8b3' x='70' width='11' height='11'/%3E%3Crect fill='%23b7d9b3' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23b9dab3' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23bbdab3' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23bcdbb3' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23bedcb3' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23c0ddb4' x='80' width='11' height='11'/%3E%3Crect fill='%23c1ddb4' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23c3deb4' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23c5dfb4' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23c6dfb4' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23c8e0b4' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23cae1b5' x='90' width='11' height='11'/%3E%3Crect fill='%23cce2b5' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23cde2b5' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23cfe3b5' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23d1e4b6' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23d3e4b6' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23d4e5b6' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23d6e6b6' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23d8e6b7' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23dae7b7' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23dce8b7' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23dde8b8' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23dfe9b8' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23e1eab8' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23e3eab9' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23e5ebb9' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23e7ebb9' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23e8ecba' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23eaedba' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23ecedbb' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23EEB' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    user-select: none;
}
`
const PageWrapper = styled.div`
    background-color: white;
    padding: 0;
    display: flex;
    flex-direction: column;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(260px, 1fr) 6fr;
`

function App() {
    const firstName = `David`;
    const lastName = `Huang`;
    const avatar = `prawn`;

    return (
        <PageWrapper>
            <GlobalStyle />
            <NavBar 
                firstName={firstName} 
                lastName={lastName}
                avatar={avatar}
            />
            <ContentWrapper>

            </ContentWrapper>
        </PageWrapper>
    )
}

export default App;