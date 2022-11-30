import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SwiperDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin: 3px;
`;

export const SwiperDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: #000000;
  border-radius: 5px;
  margin: 3px;
`;

export const SwiperItem = styled.View`
  flex: 1;
  background-color: #463f57;
`;

export const SwiperImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const FakeSwiper = styled.View`
  height: 240px;
  background-color: #463f57;
`;

export const PageBody = styled.View`
  background-color: #fff;
  border-top-left-radius: 50px;
  margin-top: -60px;
  min-height: 400px;
`;

export const ProductInfoArea = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ProductAvatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  margin-top: 20px;
  border-width: 4px;
  border-color: #fff;
`;

export const ProductInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

export const ProductInfoName = styled.Text`
  color: #463f57;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ProductFavButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 9%;
`;

export const ProductDescription = styled.Text`
  font-size: 16px;
`;

export const ProductDescriptionArea = styled.View`
  flex-direction: row;
  margin: 10px 30px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 40px;
  background-color: #463f57;
  color: #f6f7fc;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 30px;
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

export const ProductQuantityArea = styled.View`
  flex-direction: row;
  margin: 20px 25px;
`;

export const QuantityTextInput = styled.Text`
  margin: 5px;
`;
