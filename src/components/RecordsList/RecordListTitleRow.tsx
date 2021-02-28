import styled from 'styled-components';

const TableRowTitle = styled.tr`
    border-bottom: 0.125rem solid #e0e0e0;
    height: 3rem;
`;
const TableTitle = styled.th`
    color: #a1a1a1;
    font-size: 14px;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    line-height: 142%;
    text-align: start;
`;

function RecordListTitleRow(): JSX.Element {
    return (
        <TableRowTitle>
            <TableTitle>Nombre</TableTitle>
            <TableTitle>Tipo</TableTitle>
            <TableTitle>Fecha</TableTitle>
            <TableTitle>Monto</TableTitle>
        </TableRowTitle>
    );
}

export default RecordListTitleRow;
