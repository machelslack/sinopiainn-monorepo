import React, { ReactChildren, MouseEventHandler } from "react";
import PropTypes from "prop-types";

const styles = {
  border: "1px solid #eee",
  borderRadius: 3,
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  fontSize: 15,
  padding: "3px 10px",
  margin: 10
};

interface ButtonProps {
  children: string | number | boolean | {};
  onClick: MouseEventHandler<{}>;
}
const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onClick
}) => (
  <button onClick={onClick} style={styles} type="button">
    {children}
  </button>
);

Button.displayName = "Button";

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
