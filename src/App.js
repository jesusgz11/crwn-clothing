import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route, Navigate } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in_and_sign_up/sign_in_and_sign_up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUserAction } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFormAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        setCurrentUser(userAuth);
        return;
      }
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot((snapShot) => {
        setCurrentUser({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data(),
          },
        });
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate replace to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
