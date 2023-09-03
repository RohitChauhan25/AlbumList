import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
`

export const AlbumListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* padding: 20px; */
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 20px;
  gap: 20px;
  justify-content: flex-end;
  padding-right: 40px;
`
export const Cancel = styled.button`
  background-color: #eaecee;
  cursor: pointer;
  border: none;
  width: 200px;
  height: 40px;
  border-radius: 10px;
`
export const Submit = styled.button`
  background-color: #0881fb;
  cursor: pointer;
  color: white;
  border: none;
  width: 200px;
  height: 40px;
  border-radius: 10px;
`
export const AddButtonWrapper = styled.div`
  float: right;
  display: flex;
  padding: 10px;
  align-items: center;
  margin-right: 100px;
  border: 1px solid black;
  background-color: black;
  border-radius: 10px;
  cursor: pointer;
`
export const AddButton = styled.div`
  font-weight: 400;
  color: white;
  cursor: pointer;
`
