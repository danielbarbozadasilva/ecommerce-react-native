import React, {useState, useContext} from 'react';
import {
  Container,
  SImage,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  styles,
} from './styled';
import EmailIcon from '../../assets/svg/email.svg';
import LockIcon from '../../assets/svg/lock.svg';
import {useNavigation} from '@react-navigation/native';
import {signInAction} from '../../store/auth/auth.action';
import imageLogo from '../../assets/image/1.png';
import {TextInput, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registered = useSelector(state => state.auth.registered);

  const handlerSignClick = async () => {
    if (email !== '' && password !== '') {
      dispatch(signInAction({email, password}));
      if (registered) {
        navigation.navigate('MainTab');
      }
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
        <CustomButton onPress={handlerSignClick}>
          <CustomButtonText>LOGAR</CustomButtonText>
        </CustomButton>

        <CustomButton onPress={handleSignupButtonClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
export default SignIn;
