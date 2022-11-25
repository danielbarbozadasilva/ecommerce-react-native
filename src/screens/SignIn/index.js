import React from 'react';
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
import {TextInput} from 'react-native';

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlerSignClick = async () => {
    if (email !== '' && password !== '') {
      const result = await signInAction({email, password});
      console.log(result);
      if (result?.data?.token) {
        navigation.navigate('Preload');
      } else {
        alert('E-mail e/ou senha inválidos!');
      }
    } else {
      alert('Campo(s) não preenchido(s)!');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.navigate('SignUp');
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
        <CustomButton onPress={handlerSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton title="Cadastrar" onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Ainda não possui conta? </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
export default SignIn;
