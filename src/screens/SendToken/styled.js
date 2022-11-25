import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const STextInput = styled.TextInput`
  margin: 30px 0px;
`;

export const SImage = styled.Image`
  width: 350px;
  height: 250px;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 0px 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 45px;
  background-color: #463f57;
  color: #f6f7fc;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  padding-top: 10px;
  color: #463f57;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  padding-top: 10px;
  color: #463f57;
  font-weight: bold;
`;

export const styles = StyleSheet.create({
  input: {
    height: 50,
    marginTop: 15,
    backgroundColor: '#E4E3E8',
    paddingLeft: 15,
    fontSize: 16,
  },
});
