import React from 'react'
import image from '../../assets/erp_logo.png'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { TextField } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { signInValidationSchema } from '@utils/validation'
import { auth } from '@service'

const Index = () => {
  const navigate = useNavigate()
  const initalValues = {
    name: "",
    password: ""
  }
  const handleSubmit = async(values)=>{
    try{
      const res = await auth.post(values)
      if(values.hh_id === hh_id || values.password === password){
        navigate("/user-layout")
      }else{
        alert("error")
      }
      if(res.status === 201){
        const access_token = res?.data?.data?.tokens?.access_token;
        localStorage.setItem("access_token", access_token)
      }
    }catch(err){
      console.log("error");
    }
    if(values.name === "admin"){
      navigate('/user-layout')
    }else{
      alert("Xatolik")
    }
  }
  return (
    <div className='flex justify-end'>
      <div className='hidden md:block md:w-10/12'>
        <img className='h-screen md:object-cover' src={image} alt="LogIn img"/>
      </div>
      <div className='w-full h-screen flex justify-center items-center md:w-10/12'>
        <div className="card w-1/2 h-2/5 p-5 md:w-10/12 lg:w-9/12">
          <div className="card-header">
            <h1 className='text-3xl font-semibold pb-6'>Kirish</h1>
          </div>
          <div className="card-body">
            <Formik initialValues={initalValues} onSubmit={handleSubmit} validationSchema={signInValidationSchema} >
              <Form id='signIn' className='flex flex-col gap-4'>
                <Field name='name' as={TextField} type='text' fullWidth variant='outlined' label='Name' helperText={<ErrorMessage name='name' component='p' className='text-[red] text-[15px]'/>} />
                <Field name='password' as={TextField} type='password' fullWidth variant='outlined' label='Password' helperText={<ErrorMessage name='password' component='p' className='text-[red] text-[15px]'/>} />
              </Form>
            </Formik>
          </div>
          <div className="card-footer h-full">
            <button type='submit' form='signIn' className='mt-[30px] bg-[rgba(181,144,98,1)] w-full p-3 text-white rounded-lg'>Kirish</button>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Index
