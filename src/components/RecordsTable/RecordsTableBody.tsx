import styled from 'styled-components';
import { IRecordList } from '../../types';

const TableRowData = styled.tr`
    border-bottom: 0.063rem solid #e0e0e0;
    height: 3rem;
`;
const TableData = styled.td`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
`;

type RecordsListProps = {
    recordsArray: IRecordList[];
};

function RecordsTableBody(props: RecordsListProps): JSX.Element {
    const { recordsArray } = props;
    return (
        <tbody>
            {recordsArray.map(({ id, name, type, date, amount }) => (
                <TableRowData key={id}>
                    <TableData>{name}</TableData>
                    <TableData>{type}</TableData>
                    <TableData>{date}</TableData>
                    <TableData>{amount}</TableData>
                </TableRowData>
            ))}
        </tbody>
    );
}
export default RecordsTableBody;
