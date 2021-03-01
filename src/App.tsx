import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import constants from './constants';
import { useDispatch } from 'react-redux';
import { sidebarClose } from './redux/actions/layout';
import { useSelector, RootStateOrAny } from 'react-redux';

const MarginRigth = styled.div`
    margin-left: 240px;
    background-color: #ebeff2;
    height: 100%;
    ${constants.style.mediaQuery} {
        margin-left: 0;
    }
`;

function App(): JSX.Element {
    const sidebarState = useSelector((state: RootStateOrAny) => state.layout.sidebar);
    const dispatch = useDispatch();
    const handleOnClickSideBar = () => {
        if (sidebarState) {
            dispatch(sidebarClose());
        }
    };
    return (
        <BrowserRouter>
            <Sidebar />
            <MarginRigth onClick={handleOnClickSideBar}>
                <Header />
                <Router />
            </MarginRigth>
        </BrowserRouter>
    );
}

export default App;
