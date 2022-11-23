import React from 'react'
import { View, TextInput} from 'react-native'
import styled from 'styled-components/native'

export const InputArea = styled.View`
  width: 100%;
  height: 50px;
  background-color: #463f57;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin: 10px 0px;
`

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: white;
  margin-left: 10px;
`
