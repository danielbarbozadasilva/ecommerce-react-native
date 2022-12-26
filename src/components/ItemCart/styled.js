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
  height: 75px;
  margin: 17px 10px 0px 10px;
  text-align: center;
  border-radius: 20px;
`;

export const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
`;

export const ProductNameArea = styled.View`
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  padding: 15px 0px;
  font-weight: bold;
`;

export const ProductButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #463f57;
  justify-content: center;
  align-items: center;
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

export const ProductQuantityArea = styled.View`
  flex-direction: row;
  margin: 10px 0px 0px -5px;
`;

export const QuantityTextInput = styled.Text`
  margin: 5px;
`;

export const CustomButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const ProductIncrementButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  background-color: #463f57;
  color: #f6f7fc;
  justify-content: center;
  align-items: center;
`;

export const ProductDecrementButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  background-color: #463f57;
  color: #f6f7fc;
  justify-content: center;
  align-items: center;
`;
