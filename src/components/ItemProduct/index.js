import Stars from '../Stars/index';
import {
  Area,
  ProductImage,
  InfoArea,
  ProductName,
  ProductButton,
  ProductButtonText,
} from './styled';
import {renderImg} from '../../util/helpers/helpers.image'

const ItemProduct = ({data}) => {
  return (
    <Area>
      <ProductImage source={{uri: renderImg(data.photos[0])}} />
      <InfoArea>
        <ProductName>{data.title}</ProductName>
        <Stars stars={5} showNumber={true} />
        <ProductButton>
          <ProductButtonText>Comprar</ProductButtonText>
        </ProductButton>
      </InfoArea>
    </Area>
  );
};
export default ItemProduct;
