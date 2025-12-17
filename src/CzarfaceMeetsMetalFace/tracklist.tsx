import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import czarfaceMeetsMetalFace from './CzarfaceMeetsMetalFace';

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

function CzarfaceMeetsMetalFaceTable() {
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
          {czarfaceMeetsMetalFace.map((row) => (
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

export default CzarfaceMeetsMetalFaceTable;
