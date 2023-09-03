import React from 'react'
import {
  Error,
  Form,
  InputWrapper,
  Lable,
  ModalTitle,
} from '../../styles/albumCart'
import { Input, notification } from 'antd'
import { ButtonWrapper, Cancel, Submit } from '../../styles/home'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { VALIDATION_SCHEMA } from '../../utils'
import axios from 'axios'

const AddAlbumMOdal = ({ setShowAddModal, albumsData, setAlbumsData }) => {
  const {
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    // resolver: yupResolver(VALIDATION_SCHEMA),
    defaultValues: {
      userId: null,
      title: '',
    },
  })

  return <div></div>
}

export default AddAlbumMOdal
