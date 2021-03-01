import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, IconDefinition, faWallet, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface ImenuButtons {
    icon: IconDefinition;
    name: string;
    path?: string;
    lineHeight: number;
}

const menuButtons: ImenuButtons[] = [
    { icon: faHome, name: 'Home', path: '/', lineHeight: 1.7 },
    { icon: faList, name: 'Registros', path: '/registers', lineHeight: 1.6 },
    { icon: faChartBar, name: 'Estadisticas', lineHeight: 1.7 },
    { icon: faWallet, name: 'Billeteras', lineHeight: 1.7 },
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
    color: rgb(108, 117, 125);
`;
const MenuButtonText = styled.span<{ lineHeight: number }>`
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 0.925rem;
    margin-left: 1.25rem;
    line-height: ${({ lineHeight }) => lineHeight};
`;
const menuIconStyle = { height: '1.438rem' };

function Menu(): JSX.Element {
    return (
        <MenuContainer>
            {menuButtons.map(({ icon, name, path, lineHeight }) => (
                <>
                    {path ? (
                        <Link to={path} style={{ textDecoration: 'none' }}>
                            <MenuButton>
                                <FontAwesomeIcon icon={icon} style={menuIconStyle} />
                                <MenuButtonText lineHeight={lineHeight}>{name}</MenuButtonText>
                            </MenuButton>
                        </Link>
                    ) : (
                        <MenuButton>
                            <FontAwesomeIcon icon={icon} style={menuIconStyle} />
                            <MenuButtonText lineHeight={lineHeight}>{name}</MenuButtonText>
                        </MenuButton>
                    )}
                </>
            ))}
            <MenuButton>
                <FontAwesomeIcon icon={faSignOutAlt} style={{ height: '23px' }} />
                <MenuButtonText lineHeight={1.6}>Cerrar sesion</MenuButtonText>
            </MenuButton>
        </MenuContainer>
    );
}

export default Menu;
