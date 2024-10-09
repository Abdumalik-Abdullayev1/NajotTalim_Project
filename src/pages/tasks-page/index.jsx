import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { TextArea } from '@components';
import { tasks } from "@service";
import { useParams } from "react-router-dom";
import image from '../../assets/favicon.ico';

const App = () => {
  const [questionData, setQuestionData] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const hh_id = localStorage.getItem("hh_id");
  const { id } = useParams();

  const getTasks = async () => {
    try {
      const res = await tasks.get({ hh_id, topic_id: id });
      setQuestionData(res?.data?.questions);
    } catch (err) {
      console.error("error");
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    if (questionData.length > 0) {
      setSelectedQuestion(questionData[0]); // Dastlabki holat sifatida birinchi savolni o'rnatamiz
    }
  }, [questionData]);

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedQuestion(questionData[selectedIndex]);
  };

  const handleSubmit = () => {
    console.log("pass");
  };

  return (
    <Container maxWidth="w-full" sx={{ padding: "0px" }}>
      <Box mt={4}>
        <div className="flex items-start gap-3">
          <div className="w-[900px] mb-5">
            {selectedQuestion ? (
              <div className="w-[900px] h-[450px] overflow-x-auto rounded-md text-whit bg-gray-200">
                <span className="p-3">1.</span>
                <span>{selectedQuestion.name}</span>
                <div className="flex gap-2 p-3">
                  <span>{selectedQuestion.difficulty}</span>
                  <span>{selectedQuestion.type}</span>
                </div>
                <p className="p-3">Input: {selectedQuestion.input}</p>
                <p className="p-3">Output: {selectedQuestion.output}</p>
                <div className="w-full flex justify-center">
                  <img className="w-[200px]" src={image} alt="img" />
                </div>
                <p className="p-3">Constraints: {selectedQuestion.constraints}</p>
              </div>
            ) : (
              <p className="p-3 text-white">Savol tanlanmagan.</p>
            )}
          </div>
          <div className="w-full">
            <Select
              fullWidth
              variant="outlined"
              displayEmpty
              onChange={handleSelectChange}
              defaultValue=""
            >
              <MenuItem value="">
                <p>Savollarni tanlang</p>
              </MenuItem>
              {questionData.map((question, index) => (
                <MenuItem key={index} value={index}>
                  {question.name}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <select className="p-1 mb-2 outline-none">
          <option value="1">Python</option>
          <option value="2">Go</option>
          <option value="3">C#</option>
          <option value="4">JavaScript</option>
        </select>
        <TextArea />
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default App;
