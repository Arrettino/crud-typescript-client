import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import Content from './Layout/Content';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Sidebar />
            <Content>
                <>
                    <Header />
                    <Router />
                </>
            </Content>
        </BrowserRouter>
    );
}

export default App;
