import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { group } from '@service';

export default function BasicTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [subject, setSubject] = useState()
  const [value, setValue] = React.useState('one');
  const hh_id = localStorage.getItem("hh_id");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const getData = async () => {
    try {
      const res = await group.get(hh_id);
      console.log(res, "group");
      const groups = res?.data?.groups || [];
      setData(groups);
      if (groups.length > 0) {
        const subjectId = groups[0].subject_id;
        setSubject(subjectId)
      } else {
        console.log("No groups found.");
      }
    } catch (err) {
      console.error("Error fetching", err);
    }
  };

  useEffect(() => {
    getData();
  }, [hh_id]);

  const handleRowClick = () => {
    navigate(`${subject}`);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          className='mb-4'
        >
          <Tab value="one" label="Faol" />
          <Tab value="two" label="Tugagan" />
        </Tabs>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }} align="left">Guruh nomi</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">Xona</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">Boshlash vaqti</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">Tugash vaqti</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">Ochilgan vaqti</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                onClick={() => handleRowClick(item.id)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
              >
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="center">{item.room}</TableCell>
                <TableCell align="center">{new Date(item.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</TableCell>
                <TableCell align="center">{new Date(item.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</TableCell>
                <TableCell align="center">{new Date(item.started_at).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
