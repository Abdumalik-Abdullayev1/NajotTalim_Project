import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { topic, group } from '@service';

const Index = () => {
    const [topicData, setTopicData] = useState([]);
    const [grName, setGrName] = useState();
    const navigate = useNavigate();
    const { id: subject_id } = useParams();
    const hh_id = localStorage.getItem("hh_id");

    const getData = async () => {
        try {
            const res = await topic.get({ subject_id });
            setTopicData(res?.data?.topics);
        } catch (err) {
            console.error(err);
        }
    };

    const getGroupName = async () => {
        try {
            const resp = await group.get(hh_id);
            const groups = resp?.data?.groups || [];
            if (groups.length > 0) {
                const groupName = groups[1].name;
                setGrName(groupName);
            }
        } catch (err) {
            console.error("error", err);
        }
    };

    useEffect(() => {
        if (subject_id) {
            getData();
        }
        getGroupName();
    }, [subject_id, hh_id]);

    const handleRowClick = (id) => {
        navigate(`/user-layout/groups/tasks-page/${id}`);
    };

    return (
        <div>
            <h1 className="font-semibold text-center text-xl my-6">{grName}</h1>
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
                        {topicData?.map((item) => (
                            <TableRow
                                key={item.id}
                                onClick={() => handleRowClick(item.id)}
                                // onClick={() => navigate(`/user-layout/groups/tasks/${item.id}`)}
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
