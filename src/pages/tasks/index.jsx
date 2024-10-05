import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { topic, group } from '@service'

const Index = () => {
    const [topicData, setTopicData] = useState([])
    const [grName, setGrName] = useState()
    const { id } = useParams()
    const subject_id = id
    const hh_id = localStorage.getItem("hh_id");

    const getData = async () => {
        try {
            const res = await topic.get({ subject_id })
            setTopicData(res?.data?.topics);
        } catch (err) {
            console.error();
        }
    }
    const getGroupName = async () => {
        try {
            const resp = await group.get(hh_id)
            const groups = resp?.data?.groups || []
            console.log(resp, "response");
            if (groups.length > 0) {
                const groupName = groups[0].name;
                console.log(groupName, "groupName");
                setGrName(groupName)
            }
        } catch (err) {
            console.error("error");
        }
    }
    useEffect(() => {
        getData()
        getGroupName()
    }, [subject_id, hh_id])

    const handleRowClick = () => {
        window.location.href = `${id}/tasks-page`;
    };

    return (
        <div>
            <h1 className="font-semibold text-center text-xl my-6">{grName}</h1> {/*there must be group name*/}
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
                        {topicData.map((item) => (
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
