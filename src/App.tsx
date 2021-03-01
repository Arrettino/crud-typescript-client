import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import constants from './constants';

const MarginRigth = styled.div`
    margin-left: 240px;
    background-color: #ebeff2;
    height: 100%;
    ${constants.style.mediaQuery} {
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
