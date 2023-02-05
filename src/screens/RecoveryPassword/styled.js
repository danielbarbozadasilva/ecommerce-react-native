import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const ErrorMessage = styled.Text`
  color: #463f57;
`;

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const InputArea = styled.View`
  width: 100%;
  padding: 0px 40px;
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
