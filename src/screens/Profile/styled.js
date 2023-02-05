import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 15px;
  flex-direction: row;
  width: 100%;
`;

export const InfoArea = styled.View`
  justify-content: space-between;
`;

export const AreaName = styled.Text`
  font-size: 16px;
  margin: 10px 0px;
  font-weight: bold;
`;

export const CategoryIcon = styled.View`
  margin-top: 8px;
  margin-left: 10px;
  margin-right: 20px;
  text-align: center;
`;