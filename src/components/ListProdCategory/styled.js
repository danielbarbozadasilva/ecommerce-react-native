import React from 'react';
import styled from 'styled-components/native';

export const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 5px;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 75px;
  height: 85px;
  margin: 20px 10px;
  text-align: center;
  border-radius: 20px;
`;

export const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

export const ProductNameArea = styled.View`
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductName = styled.Text`
  font-size: 15px;
  margin: 5px 0px;
  font-weight: bold;
`;

export const ProductButton = styled.View`
  width: 103px;
  height: 26px;
  border: 1px solid #463f57;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 10px 3px;
`;

export const ProductButtonText = styled.Text`
  font-size: 13px;
  color: #463f57;
`;

export const ProductPromotion = styled.Text`
  text-decoration: line-through;
  font-size: 12px;
  color: #463f57;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #463f57;
`;
