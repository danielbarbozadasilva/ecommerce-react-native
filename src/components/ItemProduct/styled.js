import React from 'react';
import styled from 'styled-components/native';

export const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

export const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

export const ProductName = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const ProductButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4eadbe;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ProductButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;
