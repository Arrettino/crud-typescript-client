import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const desktopStartWidth = 1024;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const HeaderContainer = styled.div`
    height: 4.375rem;
    width: 100%;
    display: flex;
    align-items: center;
`;

const PageTitle = styled.h4`
    font-family: 'Karla', sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    color: #343a40;
    padding: 0 1.25rem;
`;

const MenuIconContainer = styled.div`
    padding: 0 0 0 1.25rem;
    display: none;
    ${mobile} {
        display: flex;
    }
`;
function Header(): JSX.Element {
    return (
        <HeaderContainer>
            <MenuIconContainer>
                <FontAwesomeIcon icon={faBars} style={{ fontSize: '1.33em' }} />
            </MenuIconContainer>
            <PageTitle>Home</PageTitle>
        </HeaderContainer>
    );
}

export default Header;
