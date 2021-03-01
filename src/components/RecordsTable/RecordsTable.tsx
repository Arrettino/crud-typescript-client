import RecordsTableBody from './RecordsTableBody';
import RecordsTableHead from './RecordsTableHead';
import { IRecordList } from '../../types';
import styled from 'styled-components';

const Table = styled.table`
    width: 80%;
    border-collapse: collapse;
`;

type RecordsListProps = {
    recordsArray: IRecordList[];
};

function RecordsTable(props: RecordsListProps): JSX.Element {
    const { recordsArray } = props;
    return (
        <Table>
            <RecordsTableHead />
            <RecordsTableBody recordsArray={recordsArray} />
        </Table>
    );
}

export default RecordsTable;
