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

const ItemFavorite = ({data}) => {
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
            <ProductPromotion>De: {price}</ProductPromotion>
            <ProductPrice>Por: {promotion}</ProductPrice>
          </>
        ) : (
          <ProductPrice>{promotion}</ProductPrice>
        )}
        <Stars stars={rating[0]?.score} showNumber={true} />
      </InfoArea>
    </Area>
  );
};
export default ItemFavorite;
