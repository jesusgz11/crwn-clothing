import { useSelector } from 'react-redux';
import CollectionPage from './collection.component';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors';
import Spinner from '../../components/spinner/spinner.component';

const CollectionContainer = () => {
  const isLoading = useSelector((state) => !selectCollectionsLoaded(state));
  return isLoading ? <Spinner /> : <CollectionPage />;
};

export default CollectionContainer;
