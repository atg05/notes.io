import React from "react";
import "./Button.styles.css";
import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, ...otherProps } = props;
  return <button {...otherProps} className="btn">{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Button;
