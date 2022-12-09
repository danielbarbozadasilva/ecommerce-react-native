import React, {useEffect, useCallback} from 'react';
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
import FavoriteFullIcon from '../../assets/svg/favorite_full.svg';
import BackIcon from '../../assets/svg/back.svg';
import {decodeToken} from '../../config/auth';
import {useDispatch, useSelector} from 'react-redux';
import {getProductByIdAction} from '../../store/product/product.action';
import {
  createLikeProductAction,
  listLikeProductAction,
  removeLikeProductAction,
} from '../../store/client/client.action';

const ProductDetails = props => {
  const [count, setCount] = React.useState(1);
  const {product} = props.route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const result = useSelector(state => state.product.productById);

  useEffect(() => {
    dispatch(getProductByIdAction(product.id));
  }, [dispatch]);

  const getLike = async likes => {
    const {clientid} = await decodeToken();
    const result = likes?.filter(item => item == clientid);
    return !!result;
  };

  const createLikeProduct = id => {
    dispatch(createLikeProductAction(id)).then(() => {
      dispatch(getProductByIdAction(id));
      dispatch(listLikeProductAction());
    });
  };

  const removeLikeProduct = id => {
    dispatch(removeLikeProductAction(id)).then(() => {
      dispatch(getProductByIdAction(id));
      dispatch(listLikeProductAction());
    });
  };

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
        {result?.photos?.length ? (
          <Swiper
            style={{height: 240}}
            dot={<SwiperDot />}
            activeDot={<SwiperDotActive />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}>
            {result?.photos?.map((item, key) => (
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
            {result?.photos?.length ? (
              <ProductAvatar
                source={{uri: renderImg(result.photos[0])}}
                resizeMode="cover"
              />
            ) : (
              ''
            )}
            <ProductInfo>
              <ProductInfoName>{result.title}</ProductInfoName>
              <Stars stars={5} showNumber={true} />
            </ProductInfo>
            <ProductFavButton>
              {result?.likes?.length && getLike(result.likes) ? (
                <FavoriteFullIcon
                  onPress={() => removeLikeProduct(result.id)}
                  width="24"
                  height="24"
                  fill="#463f57"
                />
              ) : (
                <FavoriteIcon
                  onPress={() => createLikeProduct(result.id)}
                  width="24"
                  height="24"
                  fill="#463f57"
                />
              )}
            </ProductFavButton>
          </ProductInfoArea>
          <ProductQuantityArea>
            <ProductIncrementButton onPress={increment}>
              <CustomButtonText>+</CustomButtonText>
            </ProductIncrementButton>
            <QuantityTextInput>
              {result.quantity !== 0 ? count : 0}
            </QuantityTextInput>
            <ProductDecrementButton onPress={decrement}>
              <CustomButtonText>-</CustomButtonText>
            </ProductDecrementButton>
          </ProductQuantityArea>
          <ProductDescriptionArea>
            <ProductDescription>{result.description}</ProductDescription>
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
