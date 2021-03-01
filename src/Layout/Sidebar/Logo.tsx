import styled from 'styled-components';
import logoSm from '../../assets/img/logo-sm.png';

const LogoContainer = styled.div`
    width: 8.75rem;
    height: 2.5rem;
    padding-right: 0.625rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const PageName = styled.p`
    font-size: 1.125rem;
    font-weight: 400;
    font-family: 'Patua One', cursive;
    color: rgb(52, 58, 64);
`;

function Logo(): JSX.Element {
    return (
        <LogoContainer>
            <img src={logoSm} alt="logo-sm" style={{ width: '2.5rem' }} />
            <PageName>Wallet Adm</PageName>
        </LogoContainer>
    );
}

export default Logo;
