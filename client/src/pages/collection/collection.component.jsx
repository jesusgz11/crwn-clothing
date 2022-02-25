import { useSelector } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {
  PageContainer,
  CollectionTitle,
  ItemsContainer,
} from './collection.styles';
import { useParams } from 'react-router-dom';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectShopCollection(collectionId));
  const { items, title } = collection;
  return (
    <PageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </PageContainer>
  );
};

export default CollectionPage;
