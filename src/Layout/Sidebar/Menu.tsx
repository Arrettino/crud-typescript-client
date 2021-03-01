import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, IconDefinition, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface ImenuButtons {
    icon: IconDefinition;
    name: string;
    path?: string;
}

const menuButtons: ImenuButtons[] = [
    { icon: faHome, name: 'Home', path: '/' },
    { icon: faList, name: 'Registros', path: '/records' },
    { icon: faChartBar, name: 'Estadisticas' },
];

const MenuContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const MenuButton = styled.div`
    width: 12.5rem;
    height: 1.438rem;
    padding: 0.688rem 0.938rem 0.688rem 1.563rem;
    display: flex;
    align-items: center;
    color: rgb(108, 117, 125);
`;
const MenuButtonText = styled.span`
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 0.925rem;
    margin-left: 1.25rem;
`;

function Menu(): JSX.Element {
    return (
        <MenuContainer>
            {menuButtons.map(({ icon, name, path }) => (
                <>
                    {path ? (
                        <Link to={path} style={{ textDecoration: 'none' }}>
                            <MenuButton>
                                <FontAwesomeIcon icon={icon} />
                                <MenuButtonText>{name}</MenuButtonText>
                            </MenuButton>
                        </Link>
                    ) : (
                        <MenuButton>
                            <FontAwesomeIcon icon={icon} />
                            <MenuButtonText>{name}</MenuButtonText>
                        </MenuButton>
                    )}
                </>
            ))}
            <MenuButton>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <MenuButtonText>Cerrar sesion</MenuButtonText>
            </MenuButton>
        </MenuContainer>
    );
}

export default Menu;
