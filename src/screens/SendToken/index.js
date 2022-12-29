import React from 'react';
import {Container, InputArea, STextInput, styles} from './styled';
import {useNavigation} from '@react-navigation/native';
import {sendTokenAction} from '../../store/auth/auth.action';
import {Alert} from 'react-native';
import Title from '../../components/Title/index';
import {useDispatch} from 'react-redux';
import CustomButtonComponent from '../../components/Button/index';

const SendToken = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const dispatch = useDispatch();

  const handlerRecoveryClick = async () => {
    if (email !== '') {
      dispatch(sendTokenAction({email})).then(result => {
        if (result) {
          navigation.navigate('RecoveryPassword');
        } else {
          Alert.alert('Erro', 'E-mail inválido!');
        }
      });
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

        <CustomButtonComponent text="ENVIAR" onPress={handlerRecoveryClick} />
        <CustomButtonComponent text="VOLTAR" onPress={handleBackButtonClick} />
      </InputArea>
    </Container>
  );
};
export default SendToken;
