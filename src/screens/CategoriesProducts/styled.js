import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 6px;
  z-index: 9;
`;

export const TabArea = styled.View`
  height: 60px;  
  background-color: #463f57;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  color: white;
  position: absolute;
  font-size: 20px;
  font-weight: 500;
  margin: 15px 50px;
`
