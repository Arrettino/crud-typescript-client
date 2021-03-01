import RecordsList from '../../components/RecordsTable';
import recordsArray from '../../mocks/recordsArray';

function Home(): JSX.Element {
    return (
        <>
            <p>Home</p>
            <RecordsList recordsArray={recordsArray} />
        </>
    );
}

export default Home;
