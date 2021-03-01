import styled from 'styled-components';
import Logo from './Logo';
import User from './User';
import Menu from './Menu';

const desktopStartWidth = 1024;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const SidebarContainer = styled.div`
    height: 100%;
    width: 15rem;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #ffffff;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 4.375rem 9.375rem auto;
    justify-items: center;
    align-items: center;
    ${mobile} {
        display: none;
    }
`;

function Siderbar(): JSX.Element {
    return (
        <SidebarContainer>
            <Logo />
            <User />
            <Menu />
        </SidebarContainer>
    );
}

export default Siderbar;
