import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import Content from './Layout/Content';
import AppContainer from './Layout/AppContainer';

function App(): JSX.Element {
    return (
        <AppContainer>
            <BrowserRouter>
                <Sidebar />
                <Content>
                    <>
                        <Header />
                        <Router />
                    </>
                </Content>
            </BrowserRouter>
        </AppContainer>
    );
}

export default App;
