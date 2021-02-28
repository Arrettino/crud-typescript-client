import RecordsListRows from './RecordsListRows';
import RecordListTitleRow from './RecordListTitleRow';
import { IRecordList } from '../../types';
import styled from 'styled-components';

const Table = styled.table`
    width: 80%;
    border-collapse: collapse;
`;

type RecordsListProps = {
    recordsList: IRecordList[];
};

function RecordsList(props: RecordsListProps): JSX.Element {
    const { recordsList } = props;
    return (
        <Table>
            <RecordListTitleRow />
            <RecordsListRows recordsList={recordsList} />
        </Table>
    );
}

export default RecordsList;
