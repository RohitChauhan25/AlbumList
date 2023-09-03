import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Modal from 'react-modal'
import AlbumCart from '../components/albumCart'
import {
  AddButtonWrapper,
  AddButton,
  AlbumListWrapper,
  ButtonWrapper,
  Cancel,
  Container,
  Submit,
} from '../styles/home'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Form,
  InputWrapper,
  Lable,
  Error,
  ModalTitle,
} from '../styles/albumCart'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { VALIDATION_SCHEMA } from '../utils/index'
import { Input, notification } from 'antd'
import AddAlbumMOdal from '../components/AddAlbum'
const Home = () => {
  const [albumsData, setAlbumsData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [savedData, setSavedData] = useState()

  const {
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(VALIDATION_SCHEMA),
    defaultValues: {
      userId: null,
      title: '',
    },
  })

  const fetchAlbumsData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      )
      if (response) {
        setAlbumsData(response?.data)
      }
    } catch (error) {
      return
    }
  }

  useEffect(() => {
    fetchAlbumsData()
  }, [])

  useEffect(() => {
    if (savedData) {
      setValue('title', savedData.title)
      setValue('userId', savedData.userId)
      setShowModal(true)
    }
  }, [savedData])

  const Update = async (data) => {
    const payload = {
      userId: data?.userId,
      id: data?.d,
      title: data?.title,
    }
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/albums/${savedData?.id}`,
        payload,
      )
      if (res) {
        setAlbumsData([])
        notification.success({
          message: 'Success',
          description: 'album updated successfully',
        })
        const updatedList = albumsData
        updatedList[savedData.index] = res?.data
        setAlbumsData(updatedList)
        reset({ title: '', userId: null })
        setShowModal(false)
      }
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'something went wrong',
      })
    }
  }

  const AddAlbum = async (data) => {
    const payload = {
      userId: data?.userId,
      title: data?.title,
      id: albumsData?.length + 1,
    }
    try {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/albums`,
        payload,
      )
      if (res) {
        setAlbumsData([...albumsData, res?.data])
        notification.success({
          message: 'Success',
          description: 'New album aaded check at the end',
        })
        reset({ title: '', userId: null })
        setShowAddModal(false)
      }
    } catch (error) {}
  }

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NavBar />
        <AddButtonWrapper onClick={() => setShowAddModal(true)}>
          <AddButton>Add Album</AddButton>
        </AddButtonWrapper>
      </div>

      <ToastContainer />

      <AlbumListWrapper>
        {albumsData?.map((data, index) => {
          return (
            <AlbumCart
              key={index}
              data={data}
              index={index}
              albumsData={albumsData}
              setAlbumsData={setAlbumsData}
              setSavedData={setSavedData}
            />
          )
        })}
      </AlbumListWrapper>
      <Modal
        isOpen={showModal}
        className={'Modal'}
        onAfterClose={() => setShowModal(false)}
      >
        <ModalTitle> Update Album's details</ModalTitle>
        <Form onSubmit={handleSubmit(Update)}>
          <InputWrapper>
            <Lable>Title</Lable>
            <Input
              placeholder="Enter Title"
              className="inputBox"
              defaultValue={savedData?.title}
              onChange={(e) => {
                setValue('title', e.target.value)
                trigger('title')
              }}
            />
            <Error>
              {errors?.title && <span>{errors?.title.message}</span>}
            </Error>
          </InputWrapper>
          <InputWrapper>
            <Lable>User Id</Lable>
            <Input
              placeholder="Enter user id"
              className="inputBox"
              defaultValue={savedData?.userId}
              onChange={(e) => {
                if (e.target.value) {
                  setValue('userId', parseInt(e.target.value))
                  trigger('userId')
                } else {
                  setValue('userId', null)
                  trigger('userId')
                }
              }}
            />
            <Error>
              {errors?.userId && <span>{errors?.userId.message}</span>}
            </Error>
          </InputWrapper>

          <ButtonWrapper>
            <Cancel
              type="button"
              onClick={() => {
                reset({ title: '', userId: null })
                setShowModal(false)
              }}
            >
              Cancel
            </Cancel>
            <Submit>Update</Submit>
          </ButtonWrapper>
        </Form>
      </Modal>
      <Modal
        isOpen={showAddModal}
        className={'Modal'}
        onAfterClose={() => setShowAddModal(false)}
      >
        <ModalTitle>Add New Album</ModalTitle>
        <Form onSubmit={handleSubmit(AddAlbum)}>
          <InputWrapper>
            <Lable>Title</Lable>
            <Input
              placeholder="Enter Title"
              className="inputBox"
              onChange={(e) => {
                setValue('title', e.target.value)
                trigger('title')
              }}
            />
            <Error>
              {errors?.title && <span>{errors?.title.message}</span>}
            </Error>
          </InputWrapper>
          <InputWrapper>
            <Lable>User Id</Lable>
            <Input
              placeholder="Enter user id"
              className="inputBox"
              onChange={(e) => {
                if (e.target.value) {
                  setValue('userId', parseInt(e.target.value))
                  trigger('userId')
                } else {
                  setValue('userId', null)
                  trigger('userId')
                }
              }}
            />
            <Error>
              {errors?.userId && <span>{errors?.userId.message}</span>}
            </Error>
          </InputWrapper>

          <ButtonWrapper>
            <Cancel
              type="button"
              onClick={() => {
                reset({ title: '', userId: null })
                setShowAddModal(false)
              }}
            >
              Cancel
            </Cancel>
            <Submit>Add</Submit>
          </ButtonWrapper>
        </Form>
      </Modal>
    </Container>
  )
}

export default Home
