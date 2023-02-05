import React from 'react';
import {
  Area,
  ProductImage,
  HeaderArea,
  InfoArea,
  ProductName,
  ProductNameArea,
  ProductPromotion,
  ProductPrice,
  ProductQuantityArea,
  QuantityTextInput,
  ProductIncrementButton,
  CustomButtonText,
  ProductDecrementButton,
} from './styled';
import {renderImg} from '../../util/helpers/helpers.image';
import {formatPriceBr} from '../../util/helpers/format';
import Remove from '../../assets/svg/remove.svg';
import {removeProductCartAction} from '../../store/cart/cart.action';
import {useDispatch} from 'react-redux';

const ItemCart = ({data}) => {
  const {id, photos, title, price, quantity, promotion, count} = data;
  const dispatch = useDispatch();
  const [countCart, setCountCart] = React.useState(count);

  const removeProductCart = id => {
    dispatch(removeProductCartAction(id));
  };

  function increment() {
    setCountCart(function (prevCount) {
      if (quantity > prevCount) {
        return (prevCount += 1);
      }
      return prevCount;
    });
  }

  function decrement() {
    setCountCart(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      }
      return prevCount;
    });
  }

  return (
    <Area>
      <ProductImage source={{uri: renderImg(photos[0])}} />
      <InfoArea>
        <HeaderArea>
          <ProductNameArea>
            <ProductName>{title}</ProductName>
          </ProductNameArea>
          <Remove
            onPress={() => removeProductCart(id)}
            width="20"
            height="20"
            fill="#636262"
          />
        </HeaderArea>
        {promotion < price ? (
          <>
            <ProductPromotion>De: {formatPriceBr(price)}</ProductPromotion>
            <ProductPrice>Por: {formatPriceBr(promotion)}</ProductPrice>
          </>
        ) : (
          <ProductPrice>{formatPriceBr(promotion)}</ProductPrice>
        )}
        <ProductQuantityArea>
          <ProductIncrementButton onPress={increment}>
            <CustomButtonText>+</CustomButtonText>
          </ProductIncrementButton>
          <QuantityTextInput>
            {quantity !== 0 ? countCart : 0}
          </QuantityTextInput>
          <ProductDecrementButton onPress={decrement}>
            <CustomButtonText>-</CustomButtonText>
          </ProductDecrementButton>
        </ProductQuantityArea>
      </InfoArea>
    </Area>
  );
};
export default ItemCart;
