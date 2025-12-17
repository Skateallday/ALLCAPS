
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import nehruvianDoom from './NehruvianDoom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

function nehruvianDoomTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Song Name</StyledTableCell>
            <StyledTableCell align="right">Song Length</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nehruvianDoom.map((row) => (
            <StyledTableRow key={row.songName}>
              <StyledTableCell component="th" scope="row">
                {row.songName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.songLength}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default nehruvianDoomTable;
