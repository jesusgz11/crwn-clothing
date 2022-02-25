import StyledButton from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <StyledButton {...otherProps}>{children}</StyledButton>
);

export default CustomButton;
