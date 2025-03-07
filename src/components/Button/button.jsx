import './button.css';
import propsTypes from 'prop-types';

const Button = ({ text, onClick, type, value }) => {
  return <button onClick={onClick} type={type} value={value} className='btn'>{text}</button>;
}

Button.propTypes = {
  text: propsTypes.string.isRequired,
  onClick: propsTypes.func.isRequired,
  type: propsTypes.string,
  value: propsTypes.string
}

export default Button