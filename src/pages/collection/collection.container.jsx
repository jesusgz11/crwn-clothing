import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import CollectionPage from './collection.component';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors';
import withSpiner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpiner
)(CollectionPage);

export default CollectionContainer;
