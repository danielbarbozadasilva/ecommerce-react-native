import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  color: #847c7c;
  padding: 10px 20px;
`;

export const SubTitleText = styled.Text`
  font-size: 15px;
  text-align: center;
  padding: 10px 30px;
  color: #847c7c;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 45px;
  background-color: #463f57;
  color: #f6f7fc;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
`;

export const CustomButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
