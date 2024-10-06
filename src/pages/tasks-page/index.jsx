import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { TextArea } from '@components'
import { question } from "@service";
import image from '../../assets/favicon.ico'

const App = () => {
  const [selectedAssignment, setSelectedAssignment] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAssignmentChange = (event) => setSelectedAssignment(event.target.value);

  const getQuestion = async () => {
    try {
      const res = await question.get()
      if (res.status === 200) {
        console.log(res);
      }
    } catch (err) {
      console.error("error");
    }
  }

  useEffect(() => {
    getQuestion()
  }, [])

  // const handleSubmit = async () => {
  //   if (!code) return;

  //   setLoading(true);
  //   const startTime = performance.now();

  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     const endTime = performance.now();
  //     const timeTaken = (endTime - startTime).toFixed(2);
  //     setExecutionTime(timeTaken);
  //     setExecutionHistory([...executionHistory, newExecution]);
  //     setShowTable(true);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = () => {
    console.log("pass");
  }

  return (
    <Container maxWidth="w-full" sx={{ padding: "0px" }}>
      <Box mt={4}>
        <div className="flex items-start gap-3">
          <div className="w-[900px] mb-5">
            <div className="w-[900px] h-[450px] overflow-x-auto rounded-md text-white bg-black">
              <span className="p-3">1.</span>
              <span>Code name</span>
              <div className="flex gap-2 p-3">
                <span>Easy</span>
                <span>Code</span>
              </div>
              <p className="p-3">Input: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias magnam repellat eligendi molestias amet, sed aut qui ab quasi velit nobis quisquam quia vero modi laborum aliquam iusto officiis voluptatibus?</p>
              <p className="p-3">Output: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias magnam repellat eligendi molestias amet, sed aut qui ab quasi velit nobis quisquam quia vero modi laborum aliquam iusto officiis voluptatibus?</p>
              <div className="w-full flex justify-center">
                <img className="w-[200px]" src={image} alt="img" />
              </div>
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
                <p>Qustions</p>
              </MenuItem>
              {/* {lessons[selectedLesson].assignments.map((assignment, index) => (
                <MenuItem key={index} value={assignment}>
                  {assignment}
                </MenuItem>
              ))} */}
            </Select>
          </div>
        </div>
        <select className="p-1 mb-2 outline-none">
          <option value="1">Pyhton</option>
          <option value="2">Go</option>
          <option value="3">C#</option>
          <option value="4">JavaScript</option>
        </select>
        <div className="flex">
          <TextArea />
          <p>Constrains</p>
        </div>
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Executing..." : "Submit"}
        </Button>
      </Box>
    </Container>
  );
};

export default App;
