import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { TextField } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { signInValidationSchema } from '@utils/validation'
import { auth } from '@service'
import image from '../../assets/erp_logo.png'
import notification from '../../utils/notifications'

const Index = () => {
  const navigate = useNavigate()
  const initalValues = {
    hh_id: "",
    password: ""
  }
  const handleSubmit = async (values) => {
    try {
      const res = await auth.sign_in(values)
      if (res.status === 200) {
        const token = res?.data?.access
        localStorage.setItem("token", token)
        localStorage.setItem("hh_id", values.hh_id)
        navigate('/user-layout')
      }
      // console.log(values);
    } catch (err) {
      notification({title: "Kiritilgan login yoki parol noto'g'ri", type: "error"})
      console.error("Error fetching", err);
    }
  }
  return (
    <>
      <ToastContainer />
      <div className='flex justify-end'>
        <div className='hidden md:block md:w-10/12'>
          <img className='h-screen md:object-cover' src={image} alt="LogIn img" />
        </div>
        <div className='w-full h-screen flex justify-center items-center md:w-10/12'>
          <div className="card w-1/2 h-2/5 p-5 md:w-10/12 lg:w-9/12">
            <div className="card-header">
              <h1 className='text-3xl font-semibold pb-6'>Kirish</h1>
            </div>
            <div className="card-body">
              <Formik initialValues={initalValues} onSubmit={handleSubmit} validationSchema={signInValidationSchema} >
                <Form id='signIn' className='flex flex-col gap-4'>
                  <Field name='hh_id' as={TextField} type='text' fullWidth variant='outlined' label='ID' helperText={<ErrorMessage name='hh_id' component='p' className='text-[red] text-[15px]' />} />
                  <Field name='password' as={TextField} type='password' fullWidth variant='outlined' label='Password' helperText={<ErrorMessage name='password' component='p' className='text-[red] text-[15px]' />} />
                </Form>
              </Formik>
            </div>
            <div className="card-footer h-full">
              <button type='submit' form='signIn' className='mt-[30px] bg-[rgba(181,144,98,1)] w-full p-3 text-white rounded-lg'>Kirish</button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Index
