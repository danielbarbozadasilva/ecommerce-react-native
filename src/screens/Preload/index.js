import React from 'react'
import { Container, LoadingIcon } from './styled'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

const Preload = () => {
  const navigation = useNavigation()

  React.useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token')
      if (token) {
      } else {
        navigation.navigate('SignIn')
      }
    }
  })

  return (
    <Container>
      <Image
        source={require('../../assets/image/1.png')}
        style={{ width: 350, height: 350 }}
      />
      <LoadingIcon size="large" color="#ccc" />
    </Container>
  )
}
export default Preload
