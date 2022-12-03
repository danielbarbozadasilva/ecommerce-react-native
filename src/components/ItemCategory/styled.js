import React from 'react';
import styled from 'styled-components/native';

export const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 15px;
  flex-direction: row;
`;

export const CategoryImage = styled.Image`
  width: 50px;
  height: 50px;
  margin: 0px 10px;
  text-align: center;
`;

export const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

export const CategoryName = styled.Text`
  font-size: 16px;
  margin: 10px 0px;
  font-weight: bold;
`;
