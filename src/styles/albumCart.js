import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 400px;
  height: 300px;
  border: 5px solid #27426d;
  flex-direction: column;
  border-radius: 10%;
  justify-content: space-between;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: large;
  font-size: 30px;
  text-align: center;
  width: 100%;
`
export const IconeWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  width: 100%;
  padding-bottom: 30px;
  gap: 220px;
  justify-content: center;
`
export const TitleWrapper = styled.div`
  display: flex;
  color: black;
  padding: 20px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-transform: capitalize;
  min-height: 150px;
`
export const EditButton = styled.div``

export const DeleteWrapper = styled.div``

export const Form = styled.form`
  gap: 15px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  .inputBox {
    line-height: 30px;
  }
`

export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  width: 90%;
  padding: 0 30px;
`

export const InputWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Lable = styled.span`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
`
export const Error = styled.div`
  color: red;
  font-size: 12px;
`
