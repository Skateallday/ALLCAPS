import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Doomsday from './doomsday';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);  

  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
function CustomizedTables(props) {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Song Name</StyledTableCell>
              <StyledTableCell align="right">Song Length</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Doomsday.map((row) => (
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


  export default CustomizedTables;