import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/header.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSessionAction } from './redux/user/user.actions';
import GlobalStyle from './global.styles';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in_and_sign_up/sign_in_and_sign_up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const CollectionContainer = lazy(() =>
  import('./pages/collection/collection.container')
);
const CollectionsOverviewContainer = lazy(() =>
  import('./components/collections-overview/collections.overview.container')
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSessionAction());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
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
                currentUser ? (
                  <Navigate replace to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
