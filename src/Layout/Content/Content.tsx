import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { sidebarClose } from '../../redux/actions/layout';
import { useSelector } from 'react-redux';
import constants from '../../constants';
import { useEffect } from 'react';
import IRootState from '../../redux/IRootState';

const ContentContainer = styled.div`
    margin-left: 240px;
    background-color: #ebeff2;
    height: 100%;
    ${constants.style.mediaQuery} {
        margin-left: 0;
    }
`;

type ContentProps = {
    children: React.ReactChild;
};

function Content(props: ContentProps): JSX.Element {
    const { children } = props;
    const params = useLocation();
    const dispatch = useDispatch();

    const sidebarState: boolean = useSelector((state: IRootState) => state.layout.sidebar);

    const closeSidebar = () => {
        dispatch(sidebarClose());
    };

    useEffect(() => {
        if (sidebarState) {
            closeSidebar();
        }
    }, [params.pathname]);

    const handleOnClickSideBar = () => {
        if (sidebarState) {
            closeSidebar();
        }
    };

    return <ContentContainer onClick={handleOnClickSideBar}>{children}</ContentContainer>;
}

export default Content;
