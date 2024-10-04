import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Paper,
  IconButton,
  Select,
  MenuItem,
  Button,
  // TableContainer,
  // Table,
  // TableHead,
  // TableRow,
  // TableCell,
  // TableBody,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { TextArea } from '@components'
import axios from "axios";

const lessons = [
  { title: "Kirish va Tanishuv Darsi", date: "25 Apr, 2024", assignments: ["Task 1", "Task 2"] },
  { title: "Kirish Amaliyot", date: "25 Apr, 2024", assignments: ["Task A", "Task B"] },
  { title: "Flowgorithm Boshlanishi", date: "26 Apr, 2024", assignments: ["Task X"] },
];

const App = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [selectedAssignment, setSelectedAssignment] = useState("");
  const [code, setCode] = useState("");
  const [executionTime, setExecutionTime] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [executionHistory, setExecutionHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLessonChange = (event) => {
    setSelectedLesson(event.target.value);
    setSelectedAssignment("");
  };

  const handleAssignmentChange = (event) => setSelectedAssignment(event.target.value);

  const handleSubmit = async () => {
    if (!code) return;

    setLoading(true);
    const startTime = performance.now();

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const endTime = performance.now();
      const timeTaken = (endTime - startTime).toFixed(2);
      setExecutionTime(timeTaken);

      const newExecution = {
        id: executionHistory.length + 1,
        problem: lessons[selectedLesson].title,
        status: "Accepted",
        language: "python3",
        time: `${timeTaken} ms`,
        memory: `${(Math.random() * 1000).toFixed(2)} KB`,
        date: new Date().toLocaleString(),
      };
      await axios.post("/api/submitExecution", {
        lesson: lessons[selectedLesson].title,
        assignment: selectedAssignment,
        code,
        executionTime: timeTaken,
      });
      setExecutionHistory([...executionHistory, newExecution]);
      setShowTable(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="w-full" sx={{ padding: "0px" }}>
      <Box mt={4}>
        <div className="flex items-start gap-3">
          <div className="w-[790px] mb-5">
            <div className="w-[790px] h-[450px] overflow-x-auto rounded-md text-white bg-black">
              <h1 className="p-5">Code here:</h1>
            </div>
          </div>
          <div className="w-full">
            <Select
              value={selectedAssignment}
              onChange={handleAssignmentChange}
              fullWidth
              variant="outlined"
              displayEmpty
            >
              <MenuItem value="">
                <p>Select Assignment</p>
              </MenuItem>
              {lessons[selectedLesson].assignments.map((assignment, index) => (
                <MenuItem key={index} value={assignment}>
                  {assignment}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <TextArea />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Executing..." : "Submit"}
        </Button>

        {executionTime && (
          <Typography sx={{ mt: 2 }}>Execution Time: {executionTime} ms</Typography>
        )}
      </Box>
    </Container>
  );
};

export default App;
