import { connect } from 'react-redux';
import withParams from '../../components/with-params/with-params.component';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {
  PageContainer,
  CollectionTitle,
  ItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
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

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.params.collectionId)(state),
});

export default withParams(connect(mapStateToProps)(CollectionPage));
