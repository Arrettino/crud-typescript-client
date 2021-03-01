import styled from 'styled-components';

const UserContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 1.25rem;
    flex-direction: column;
    align-items: center;
`;

const UserImg = styled.img.attrs((props) => ({
    src: props.src,
    alt: 'User-Image',
}))`
    width: 3.5rem;
    border: 1px solid #ebeff2;
    border-radius: 50%;
`;

const UserName = styled.p`
    font-family: 'Karla', sans-serif;
    font-weight: 600;
    font-size: 0.938rem;
    line-height: 1.031rem;
    color: rgb(52, 58, 64);
    margin-top: 0.625rem;
`;
const MyWallet = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.35rem;
    font-size: 0.9rem;
    color: rgb(152, 166, 173);
`;

function User(): JSX.Element {
    return (
        <UserContainer>
            <UserImg src="http://test4.servernet.rs/assets/pages/media/profile/profile_user.jpg" />
            <UserName>Nowak Helme</UserName>
            <MyWallet>My Wallet</MyWallet>
        </UserContainer>
    );
}

export default User;
