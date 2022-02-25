import { useSelector } from 'react-redux';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors';
import Spinner from '../spinner/spinner.component';
import CollectionsOverview from './collections-overview.component';

const CollectionsOverviewContainer = () => {
  const isLoading = useSelector((state) => !selectCollectionsLoaded(state));
  return isLoading ? <Spinner /> : <CollectionsOverview />;
};

export default CollectionsOverviewContainer;
