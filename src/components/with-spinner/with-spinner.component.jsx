import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const withSpiner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    if (isLoading) {
      return (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      );
    }
    return <WrappedComponent {...otherProps} />;
  };

export default withSpiner;
