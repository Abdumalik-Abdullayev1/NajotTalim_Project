import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'Bootcamp Foundation N48', 'Dasturlash', 24, '25 Apr, 2024'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <NavLink to="sub-group">
        <ListItem disablePadding>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">Guruh nomi</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">Yo'nalishi</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">O'qituvchi</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">Boshlash vaqti</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </ListItem>
      </NavLink>
    </TableContainer>
  );
}
