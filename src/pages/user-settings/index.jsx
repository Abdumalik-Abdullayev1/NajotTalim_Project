import * as React from 'react'
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { SettingsModal, PasswordModal } from '@components'
import { profile } from '@service'
import image from '../../assets/profile.f24493e8.jpeg'

const Index = () => {
  const [user, setUser] = useState()
  // const [gender, setGender] = useState('');

  // const handleChange = (event) => {
  //   setGender(event.target.value);
  // };
  
  const getUser = async()=>{
    try{
      const res = await profile.get()
      console.log(res);
      if(res.status === 200){
        setUser(res?.data)
      }
    }catch(err){
      console.error("error");
    }
  }
  useEffect(()=>{
    getUser()
  },[])


  return (
    <div className='flex flex-col gap-8'>
      <div className='w-[99%] h-[45vh]'>
        <div className='w-full bg-white h-full rounded-lg'>
          <div className='flex justify-between items-center pr-10'>
            <h1 className='font-bold text-2xl p-7 inline-block'>Shaxsiy ma'lumotlar</h1>
            <SettingsModal />
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
            <div className='pl-20 flex flex-col gap-5'>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <p>Ism</p>
                <h2 className='text-[25px] font-bold'>{user?.firstname}</h2>
              </Box>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <p>Telefon raqami</p>
                <h2 className='text-[25px] font-bold'>{user?.phone}</h2>
                {/* <TextField fullWidth label="Telefon raqam" id="fullWidth" /> */}
              </Box>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <p>Jinsi</p>
                <h2 className='text-[25px] font-bold'>{user?.gender}</h2>
              </Box>
              {/* <FormControl sx={{ minWidth: 100 }}>
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
              </FormControl> */}
            </div>
            <div className='flex flex-col gap-5'>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <p>Familiya</p>
                <h2 className='text-[25px] font-bold'>{user?.lastname}</h2>
              </Box>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <p>Tug'ulgan sana</p>
                <h2 className='text-[25px] font-bold'>{new Date(user?.date_of_birth).toLocaleDateString()}</h2>
              </Box>
              <Box sx={{ width: 300, maxWidth: '100%' }}>
                <p>HH ID</p>
                <h2 className='text-[25px] font-bold'>{user?.hh_id}</h2>
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
            <PasswordModal />
          </div>
          <p className='px-6 font-extrabold'>*******</p>
        </div>
      </div>
    </div>
  )
}

export default Index
