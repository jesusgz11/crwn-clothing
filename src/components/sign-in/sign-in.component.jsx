import { useState } from 'react';
import { connect } from 'react-redux';
import {
  googleSignInStartAction,
  emailSignInStartAction,
} from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, signInWithGoogleStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          required
          handleChange={handleChange}
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            isGoogleSignIn
            type="button"
            onClick={signInWithGoogleStart}
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogleStart: () => dispatch(googleSignInStartAction()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStartAction({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
