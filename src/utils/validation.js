import * as Yup from 'yup'

// =================== AUTH ==================

export const signInValidationSchema = Yup.object().shape({
    hh_id: Yup.string().required('Id is required'),
    password: Yup.string().required('Password is required')
})

export const signUpValidationSchema = Yup.object().shape({
    firstname: Yup.string().required('Ism tanlanishi kerak'),
    lastname: Yup.string().required('Familiya tanlanishi kerak'),
    phone: Yup.string().required('Telefon raqam tanlanishi kerak'),
    date_of_birth: Yup.string().required("Tug'ilgan sana tanlanishi kerak"),
    gender: Yup.string().required('Jinsi tanlanishi kerak'),
    hh_id: Yup.string().required('ID tanlanishi kerak')
})