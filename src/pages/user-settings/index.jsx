import * as React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { SettingsModal, PasswordModal } from '@components'
import image from '../../assets/profile.f24493e8.jpeg'

const Index = () => {
  const [gender, setGender] = useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div className='flex flex-col gap-8'>
      <div className='w-[99%] h-[45vh]'>
        <div className='w-full bg-white h-full rounded-lg'>
          <div className='flex justify-between items-center pr-10'>
            <h1 className='font-bold text-2xl p-7 inline-block'>Shaxsiy ma'lumotlar</h1>
            <SettingsModal/>
          </div>
          <div className='flex gap-10 pl-16'>
            <div className='w-[150px] text-center'>
              <div className='w-[140px] border-[1px] border-black'>
                <img src={image} alt="example image" />
                <p className='text-center text-black'>namuna</p>
              </div>
              <span className='text-[12px] text-center'>500x500 o`lcham, JPEG, JPG, PNG format, maksimum 2MB</span>
            </div>
            <div className='w-[140px] h-[140px] rounded-[50%] bg-white overflow-hidden'>
              <img src={image} alt="image" />
            </div>
            <div className='pl-20 flex flex-col gap-6'>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <TextField fullWidth label="Ism" id="fullWidth" />
              </Box>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <TextField fullWidth label="Telefon raqam" id="fullWidth" />
              </Box>
              <FormControl sx={{ minWidth: 100 }}>
                <InputLabel id="gender-label">Jinsi</InputLabel>
                <Select
                  labelId="gender-label"
                  value={gender}
                  onChange={handleChange}
                  label="Jinsi"
                >
                  <MenuItem value="male">Erkak</MenuItem>
                  <MenuItem value="female">Ayol</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='flex flex-col gap-6'>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <TextField fullWidth label="Familiya" id="fullWidth" />
              </Box>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <TextField fullWidth label="Tug'ulgan sana" id="fullWidth" />
              </Box>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <TextField fullWidth label="Tug'ulgan sana" id="fullWidth" />
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[55%] h-[23vh] flex gap-8'>
        <div className='w-full h-full bg-white rounded-lg'>
          <h1 className='p-6 font-extrabold text-xl'>Kirish</h1>
          <p className='px-6'>Number</p>
        </div>
        <div className='w-full h-full bg-white rounded-lg'>
          <div className='flex justify-between items-center'>
            <h1 className='p-6 font-extrabold text-xl'>Parol</h1>
            <PasswordModal/>
          </div>
          <p className='px-6 font-extrabold'>*******</p>
        </div>
      </div>
    </div>
  )
}

export default Index
