import { useDispatch } from 'react-redux';
import { addItemAction } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addItemAction(item));
  };

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={addItem}>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
