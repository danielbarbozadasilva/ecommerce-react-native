import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';

export const ErrorMessage = styled.Text`
  color: #463f57;
`;

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 45px;
  background-color: #463f57;
  color: #f6f7fc;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 35px 0px;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SelectArea = styled.View`
  margin: 10px 0px;
`;

export const styles = StyleSheet.create({
  input: {
    height: 50,
    marginTop: 10,
    backgroundColor: '#E4E3E8',
    paddingLeft: 15,
    fontSize: 16,
  },
  inputSelect: {
    height: 50,
    backgroundColor: '#E4E3E8',
    fontSize: 16,
  },
});
