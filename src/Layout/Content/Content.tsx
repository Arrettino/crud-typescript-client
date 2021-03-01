import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { sidebarClose } from '../../redux/actions/layout';
import { useSelector, RootStateOrAny } from 'react-redux';
import constants from '../../constants';

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
    const dispatch = useDispatch();

    const sidebarState: boolean = useSelector((state: RootStateOrAny) => state.layout.sidebar);

    const handleOnClickSideBar = () => {
        if (sidebarState) {
            dispatch(sidebarClose());
        }
    };

    return <ContentContainer onClick={handleOnClickSideBar}>{children}</ContentContainer>;
}

export default Content;
