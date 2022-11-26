import React from 'react';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  STextInput,
  styles,
} from './styled';
import {useNavigation} from '@react-navigation/native';
import {sendTokenAction} from '../../store/auth/auth.action';
import {Alert} from 'react-native';
import Title from '../../components/title/index';

const SendToken = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');

  const handlerRecoveryClick = async () => {
    if (email !== '') {
      const result = await sendTokenAction({email});
      if (result) {
        navigation.navigate('RecoveryPassword');
      } else {
        Alert.alert('Erro', 'E-mail inválido!');
      }
    } else {
      Alert.alert('Atenção', 'Campo não preenchido!');
    }
  };

  const handleBackButtonClick = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <InputArea>
        <Title text="Recuperar senha" />
        <STextInput
          placeholder="Digite o seu e-mail"
          value={email}
          onChangeText={t => setEmail(t)}
          style={styles.input}
        />

        <CustomButton onPress={handlerRecoveryClick}>
          <CustomButtonText>ENVIAR</CustomButtonText>
        </CustomButton>

        <CustomButton onPress={handleBackButtonClick}>
          <CustomButtonText>VOLTAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
export default SendToken;
