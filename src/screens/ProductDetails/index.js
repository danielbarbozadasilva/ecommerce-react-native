import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Scroller,
  PageBody,
  ProductInfoArea,
  ProductDescriptionArea,
  ProductDescription,
  SwiperDot,
  SwiperDotActive,
  SwiperItem,
  SwiperImage,
  FakeSwiper,
  ProductAvatar,
  ProductInfo,
  ProductInfoName,
  ProductFavButton,
  BackButton,
  CustomButton,
  CustomButtonText,
  ProductIncrementButton,
  ProductDecrementButton,
  ProductQuantityArea,
  QuantityTextInput,
} from './styled';
import Swiper from 'react-native-swiper';
import {renderImg} from '../../util/helpers/helpers.image';
import Stars from '../../components/Stars/index';
import FavoriteIcon from '../../assets/svg/favorite.svg';
import BackIcon from '../../assets/svg/back.svg';

const ProductDetails = props => {
  const [count, setCount] = React.useState(1);
  const {product} = props.route.params;
  const navigation = useNavigation();

  function increment() {
    setCount(function (prevCount) {
      if (product.quantity > prevCount) {
        return (prevCount += 1);
      }
      return prevCount;
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      }
      return prevCount;
    });
  }

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleAddCartButton = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Scroller>
        {product ? (
          <Swiper
            style={{height: 240}}
            dot={<SwiperDot />}
            activeDot={<SwiperDotActive />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}>
            {product.photos.map((item, key) => (
              <SwiperItem key={key}>
                <SwiperImage
                  source={{uri: renderImg(item)}}
                  resizeMode="cover"
                />
              </SwiperItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwiper />
        )}
        <PageBody>
          <ProductInfoArea>
            <ProductAvatar
              source={{uri: renderImg(...Object.values(product.photos))}}
              resizeMode="cover"
            />
            <ProductInfo>
              <ProductInfoName>{product.title}</ProductInfoName>
              <Stars stars={5} showNumber={true} />
            </ProductInfo>
            <ProductFavButton>
              <FavoriteIcon width="24" height="24" fill="#463f57" />
            </ProductFavButton>
          </ProductInfoArea>
          <ProductQuantityArea>
            <ProductIncrementButton onPress={increment}>
              <CustomButtonText>+</CustomButtonText>
            </ProductIncrementButton>
            <QuantityTextInput>
              {product.quantity !== 0 ? count : 0}
            </QuantityTextInput>
            <ProductDecrementButton onPress={decrement}>
              <CustomButtonText>-</CustomButtonText>
            </ProductDecrementButton>
          </ProductQuantityArea>
          <ProductDescriptionArea>
            <ProductDescription>{product.description}</ProductDescription>
          </ProductDescriptionArea>
          <CustomButton onPress={handleAddCartButton}>
            <CustomButtonText>Adicionar ao Carrinho</CustomButtonText>
          </CustomButton>
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#463f57" />
      </BackButton>
    </Container>
  );
};

export default ProductDetails;
