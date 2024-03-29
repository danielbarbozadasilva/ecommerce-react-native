import React, {useState} from 'react';
import {
  Container,
  SImage,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  styles,
} from './styled';
import EmailIcon from '../../../assets/svg/email.svg';
import LockIcon from '../../../assets/svg/lock.svg';
import {useNavigation} from '@react-navigation/native';
import imageLogo from '../../../assets/image/logo.png';
import {TextInput, Alert} from 'react-native';
import CustomButtonComponent from '../../../components/Button/index';

const SignIn = ({submit}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerSignClick = async () => {
    if (email !== '' && password !== '') {
      submit({email, password});
    } else {
      Alert.alert('Atenção', 'Campo(s) não preenchido(s)!');
    }
  };

  const handleSignupButtonClick = () => {
    navigation.navigate('SignUp');
  };

  const handleRecoveryPasswordButtonClick = () => {
    navigation.navigate('SendToken');
  };

  return (
    <Container>
      <SImage source={imageLogo} />
      <InputArea>
        <TextInput
          IconSvg={EmailIcon}
          placeholder="Digite o seu e-mail"
          value={email}
          onChangeText={t => setEmail(t)}
          style={styles.input}
        />
        <TextInput
          IconSvg={LockIcon}
          placeholder="Digite a senha"
          value={password}
          onChangeText={t => setPassword(t)}
          secureTextEntry={true}
          style={styles.input}
        />
        <SignMessageButton onPress={handleRecoveryPasswordButtonClick}>
          <SignMessageButtonText>Esqueceu a sua senha? </SignMessageButtonText>
          <SignMessageButtonTextBold>Recuperar senha</SignMessageButtonTextBold>
        </SignMessageButton>

        <CustomButtonComponent text="LOGAR" onPress={handlerSignClick} />
        <CustomButtonComponent text="CADASTRAR" onPress={handleSignupButtonClick} />
        
      </InputArea>
    </Container>
  );
};
export default SignIn;
