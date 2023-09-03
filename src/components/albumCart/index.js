import React, { useMemo, useState } from 'react'
import {
  Container,
  IconeWrapper,
  Title,
  TitleWrapper,
  EditButton,
  DeleteWrapper,
} from '../../styles/albumCart'
import { Modal as DeleteModal } from 'antd'
import DeleteIcon from '../../assets/svg/DeleteIcon'
import EditIcone from '../../assets/svg/EditIcon'
import { Tooltip, notification } from 'antd'
import axios from 'axios'

const AlbumCart = ({
  data,
  albumsData,
  setAlbumsData,
  setSavedData,
  index,
}) => {
  const [arrow, setArrow] = useState('Show')

  // confirmation box before deleting album
  const showConfirm = (id) => {
    DeleteModal.confirm({
      title: 'Confirm Delete',
      content: 'Are you sure you want to delete this Album?',
      onOk() {
        deleteAlbums(id)
      },
      onCancel() {
        return
      },
    })
  }

  // delete album API call
  const deleteAlbums = async (id) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
      )
      if (res) {
        setAlbumsData(albumsData?.filter((data) => data?.id !== id))
        notification.success({
          message: 'Success',
          description: 'album deleted successfully',
        })
      }
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'something went wrong',
      })
    }
  }

  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false
    }

    if (arrow === 'Show') {
      return true
    }

    return {
      pointAtCenter: true,
    }
  }, [arrow])

  return (
    <Container>
      <TitleWrapper>
        <Title>{data?.title}</Title>
      </TitleWrapper>
      <IconeWrapper>
        <Tooltip
          placement="top"
          title={'Edit'}
          arrow={mergedArrow}
          color="blue"
          width={200}
        >
          <EditButton
            onClick={() => {
              setSavedData({ ...data, index: index })
            }}
          >
            <EditIcone />
          </EditButton>
        </Tooltip>
        <Tooltip
          placement="top"
          title={'Delete'}
          arrow={mergedArrow}
          color="blue"
          width={200}
        >
          <DeleteWrapper onClick={() => showConfirm(data?.id)}>
            <DeleteIcon />
          </DeleteWrapper>
        </Tooltip>
      </IconeWrapper>
    </Container>
  )
}

export default AlbumCart
