import * as Yup from 'yup'

export const VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  userId: Yup.number()
    .required('User ID is required')
    .typeError('Value must be a number'),
})
