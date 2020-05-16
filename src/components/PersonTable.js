import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'; 
import PersonRows from './PersonRows';

const useStyles = makeStyles({
  table :{
    minWidth : 650,
    maxWidth : 1000,
  }
}); 


const PersonTable = ({persons}) => {
  
  const classes = useStyles();
  return( 
    <React.Fragment>
      <div class="PersonTable">
      <TableContainer component={Paper} alignItems="center">
        <Table className={classes.table} aria-label="simple table" >
          <TableHead stickyHeader aria-label="sticky table">
            <TableRow>
              <TableCell><u>Id</u></TableCell>
              <TableCell align="left"><u>First Name</u></TableCell>
              <TableCell align="left"><u>Last Name</u></TableCell>
              <TableCell align="left"><u>Age</u></TableCell>
              <TableCell align="left"><u>About</u></TableCell>
            </TableRow>
          </TableHead>
          <TableBody > 
            {persons.map(person => {
              return(
              <PersonRows person1={person}/>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </React.Fragment>
  );
}

export default PersonTable;