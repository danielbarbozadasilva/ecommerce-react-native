import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const SearchArea = styled.View`
  background-color: #625977;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #ffffff;
`;

export const ContainerText = styled.View`
  margin: 50% auto;
`;

export const ContainerImage = styled.View`

`

export const HeaderImage = styled.Image`
  width: 100%;
  height: 200px;
`;
