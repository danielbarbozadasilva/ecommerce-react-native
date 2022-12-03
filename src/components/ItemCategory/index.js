import {Area, CategoryImage, InfoArea, CategoryName} from './styled';
import {renderImg} from '../../util/helpers/helpers.image';
import {useNavigation} from '@react-navigation/native';

const ItemCategory = ({data}) => {
  const navigation = useNavigation();
  const {id, name, photo} = data;

  const handleClick = () => {
    navigation.navigate('CategoriesProducts', {id: id, name: name});
  };

  return (
    <Area onPress={handleClick}>
      <CategoryImage source={{uri: renderImg(photo)}} />
      <InfoArea>
        <CategoryName>{name}</CategoryName>
      </InfoArea>
    </Area>
  );
};
export default ItemCategory;
