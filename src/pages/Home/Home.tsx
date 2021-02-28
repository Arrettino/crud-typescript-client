import RecordsList from '../../components/RecordsList';
import recordsList from '../../mocks/recordsList';

function Home(): JSX.Element {
    return (
        <>
            <p>Home</p>
            <RecordsList recordsList={recordsList} />
        </>
    );
}

export default Home;
