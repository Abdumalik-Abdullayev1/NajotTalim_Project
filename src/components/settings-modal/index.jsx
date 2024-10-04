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
import { signUpValidationSchema } from '../../utils/validation';
import { Field, Form, Formik, ErrorMessage } from 'formik';


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
  // const 
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

  const initalValues = {
    date_of_birth: "",
    firstname: "",
    gender: "",
    hh_id: "",
    lastname: "",
    phone: "",

  }

  const handleSubmit = async (values) => {
    console.log(values);
  }

  return (
    <div>
      <Button onClick={handleOpen}><EditIcon sx={{ color: 'gray' }} /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500, padding: "0px", borderRadius: "8px", border: "none" }}>
          <div className='flex items-center justify-between p-4'>
            <h1 className='font-extrabold'>Shaxsiy ma'lumotlar</h1>
            <CloseIcon sx={{ color: "gray" }} onClick={handleClose} />
          </div>
          <div>
            <Formik initialValues={initalValues} onSubmit={handleSubmit} validationSchema={signUpValidationSchema}>
              <Form id='signUp'>
                <div className='flex gap-3 px-4'>
                  <Box sx={{ width: 300, maxWidth: '100%', paddingTop: "10px" }}>
                    <Field name='firstname' as={TextField} type='text' fullWidth variant='outlined' label='Ism' helperText={<ErrorMessage name='firstname' component='span' className='text-[red] text-[15px]' />} />
                  </Box>
                  <Box sx={{ width: 300, maxWidth: '100%', paddingTop: "10px" }}>
                    <Field name='lastname' as={TextField} type='text' fullWidth variant='outlined' label='Familiya' helperText={<ErrorMessage name='lastname' component='p' className='text-[red] text-[15px]' />} />
                  </Box>
                </div>
                <div className='flex gap-3 p-4'>
                  <Box sx={{ width: 300, maxWidth: '100%' }}>
                    <Field name='phone' as={TextField} type='text' fullWidth variant='outlined' label='Telefon raqam' helperText={<ErrorMessage name='phone' component='p' className='text-[red] text-[15px]' />} />
                  </Box>
                  <Box sx={{ width: 300, maxWidth: '100%' }}>
                    <Field name='date_of_birth' as={TextField} type='text' fullWidth variant='outlined' label="Tug'ilgan sana" helperText={<ErrorMessage name='date_of_birth' component='p' className='text-[red] text-[15px]' />} />
                  </Box>
                </div>
                <div className='flex px-4 gap-3'>
                  <FormControl sx={{ minWidth: "49%" }}>
                    <InputLabel id="gender-label" className='p-4'>Jinsi</InputLabel>
                    <Field
                      value={gender}
                      as={Select}
                      label="Jinsi"
                      onChange={(event) => setFieldValue("gender", event.target.value)}
                    >
                      <MenuItem value="male">Erkak</MenuItem>
                      <MenuItem value="female">Ayol</MenuItem>
                    </Field>
                  </FormControl>
                  <Box sx={{ width: 300, maxWidth: '100%' }}>
                    <Field name='hh_id' as={TextField} type='text' fullWidth variant='outlined' label='HH ID' helperText={<ErrorMessage name='hh_id' component='p' className='text-[red] text-[15px]' />} />
                  </Box>
                </div>
              </Form>
            </Formik>
            <div className='flex p-4'>
              <button type='submit' form='signUp' className='mt-[30px] bg-[rgba(181,144,98,1)] w-full p-3 text-white rounded-lg'>Saqlash</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
