import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';

const desktopStartWidth = 1024;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const MarginRigth = styled.div`
    margin-left: 240px;
    background-color: #ebeff2;
    height: 100%;
    ${mobile} {
        margin-left: 0;
    }
`;

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Sidebar />
            <MarginRigth>
                <Header />
                <Router />
            </MarginRigth>
        </BrowserRouter>
    );
}

export default App;
