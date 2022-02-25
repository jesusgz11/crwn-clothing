import { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route, Navigate } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in_and_sign_up/sign_in_and_sign_up.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionContainer from './pages/collection/collection.container';
import CollectionsOverviewContainer from './components/collections-overview/collections.overview.container';
import { checkUserSessionAction } from './redux/user/user.actions';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSessionAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />}>
          <Route path="" element={<CollectionsOverviewContainer />} />
          <Route path=":collectionId" element={<CollectionContainer />} />
        </Route>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/signin"
          element={
            currentUser ? <Navigate replace to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Routes>
    </>
  );
};

export default App;
