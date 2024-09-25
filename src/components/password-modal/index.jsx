import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function NestedModal() {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState('');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div>
      <Button onClick={handleOpen}><EditIcon sx={{color: 'gray'}} /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, padding: "0px", borderRadius: "8px", border: "none"}}>
          <div className='flex items-center justify-between p-4'>
            <h1 className='font-extrabold'>Shaxsiy ma'lumotlar</h1>
            <CloseIcon sx={{color: "gray"}} onClick={handleClose}/>
          </div>
          <h2 className='px-4'>Quyidagi ma’lumotlarni to‘ldiring</h2>
          <div>
            <div className='gap-3 px-4'>
                <Box sx={{ width: "100%", maxWidth: '100%', paddingTop: "10px" }}>
                    <h2 className='pt-4 text-gray-500'>Amaldagi parol</h2>
                    <input type='password' placeholder='Amaldagi parol' className='w-full p-3 outline-orange-600 rounded-md' />
                </Box>
                <Box sx={{ width: "100%", maxWidth: '100%', paddingTop: "10px" }}>
                    <h2 className='pt-4 text-gray-500'>Yangi parol</h2>
                    <input type='password' placeholder='Yangi parol' className='w-full p-3 outline-orange-600 rounded-md' />
                </Box>
                <Box sx={{ width: "100%", maxWidth: '100%', paddingTop: "10px" }}>
                    <h2 className='pt-4 text-gray-500'>Parolni tasdiqlash</h2>
                    <input type='password' placeholder='Parolni tasdiqlash' className='w-full p-3 outline-orange-600 rounded-md'/>
                </Box>
            </div>
            <div className='flex p-4'>
                <button type='submit' form='signIn' className='mt-[30px] bg-orange-600 w-full p-3 text-white rounded-lg'>Saqlash</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}