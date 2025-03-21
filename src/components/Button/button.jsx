import './button.css';
import propsTypes from 'prop-types';

const Button = ({ text, onClick, type, value, className }) => {
  return <button onClick={onClick} type={type} value={value} className={className}>{text}</button>;
}

Button.propTypes = {
  text: propsTypes.string.isRequired,
  onClick: propsTypes.func.isRequired,
  type: propsTypes.string,
  value: propsTypes.string,
  className: propsTypes.string
}

export default Button