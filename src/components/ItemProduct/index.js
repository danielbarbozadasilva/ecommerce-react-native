import Stars from '../Stars/index';
import {
  Area,
  ProductImage,
  InfoArea,
  ProductName,
  ProductNameArea,
  ProductPromotion,
  ProductPrice,
} from './styled';
import {renderImg} from '../../util/helpers/helpers.image';
import {useNavigation} from '@react-navigation/native';
import {formatPriceBr} from '../../util/helpers/format';

const ItemProduct = ({data}) => {
  const navigation = useNavigation();
  const {photos, title, price, promotion, rating} = data;

  const handleClick = () => {
    navigation.navigate('ProductDetails', {product: data});
  };

  return (
    <Area onPress={handleClick}>
      <ProductImage source={{uri: renderImg(photos[0])}} />
      <InfoArea>
        <ProductNameArea>
          <ProductName>{title}</ProductName>
        </ProductNameArea>
        {promotion < price ? (
          <>
            <ProductPromotion>De: {formatPriceBr(price)}</ProductPromotion>
            <ProductPrice>Por: {formatPriceBr(promotion)}</ProductPrice>
          </>
        ) : (
          <ProductPrice>{formatPriceBr(promotion)}</ProductPrice>
        )}
        <Stars stars={rating[0]?.score} showNumber={true} />
      </InfoArea>
    </Area>
  );
};
export default ItemProduct;
