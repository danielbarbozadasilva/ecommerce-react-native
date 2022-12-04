import Stars from '../Stars/index';
import {
  Area,
  ProductImage,
  InfoArea,
  ProductName,
  ProductButton,
  ProductButtonText,
  ProductPromotion,
  ProductPrice,
} from './styled';
import {renderImg} from '../../util/helpers/helpers.image';
import {useNavigation} from '@react-navigation/native';
import {formatPriceBr} from '../../util/helpers/format-price';

const ItemCategoryProduct = ({data}) => {
  const navigation = useNavigation();
  const {photos, title, price, promotion} = data;

  const handleClick = () => {
    navigation.navigate('ProductDetails', {product: data});
  };

  return (
    <Area onPress={handleClick}>
      <ProductImage source={{uri: renderImg(photos[0])}} />
      <InfoArea>
        <ProductName>{title}</ProductName>
        {promotion < price ? (
          <>
            <ProductPromotion>De: {formatPriceBr(price)}</ProductPromotion>
            <ProductPrice>Por: {formatPriceBr(promotion)}</ProductPrice>
          </>
        ) : (
          <ProductPrice>{formatPriceBr(promotion)}</ProductPrice>
        )}
        <Stars stars={5} showNumber={true} />
        <ProductButton>
          <ProductButtonText>Comprar</ProductButtonText>
        </ProductButton>
      </InfoArea>
    </Area>
  );
};
export default ItemCategoryProduct;
