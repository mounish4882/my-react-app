import React from 'react';
import { TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';


const PersonRows = ({person1}) => {
  return (
      <TableRow key={person1.id}>
        <TableCell>{person1.id}</TableCell>
        <TableCell align="left">{person1.first_name}</TableCell>
        <TableCell align="left">{person1.last_name}</TableCell>
        <TableCell align="left">{person1.Age}</TableCell>
        <TableCell align="left">{person1.About}</TableCell>
      </TableRow>
  );
}

export default PersonRows;