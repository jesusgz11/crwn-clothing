import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors';
import withSpiner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsLoaded(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpiner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
