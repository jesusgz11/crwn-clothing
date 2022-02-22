import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <>
      <Outlet />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
