import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { topic } from '@service'

const Index = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    const subject_id = id
    console.log(subject_id);

    const getData = async () => {
        try {
            const res = await topic.get({ subject_id })
            if (res.status === 200) {
                setData(res?.data?.topics);
            }
        } catch (err) {
            console.error();
        }
    }
    useEffect(() => {
        getData()
    }, [subject_id])

    const handleRowClick = () => {
        window.location.href = `${id}/tasks-page`;
    };

    return (
        <div>
            <h1 className="font-semibold text-center text-xl my-6">Bootcamp Foundation N48</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }} align="left">Mavzu</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Tavsif</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Berilgan vaqti</TableCell>
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
                                <TableCell align="center">{item.description}</TableCell>
                                <TableCell align="center">{new Date(item.created_at).toLocaleDateString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Index;
