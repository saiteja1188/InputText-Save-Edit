import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5d0fe;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  width: 30%;
`

export const Heading = styled.h1`
  font-family: roboto;
  font-size: 24px;
  color: #323f4b;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Paragraph = styled.p`
  font-family: roboto;
  font-size: 16px;
  color: #000000;
`

export const Input = styled.input`
  border: 1px solid #cbd2d9;
  color: #cbd2d9;
  font-family: roboto;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  padding: 6px 15px;
`

export const Button = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  padding: 6px 15px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
`
