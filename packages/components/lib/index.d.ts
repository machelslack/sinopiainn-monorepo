import React, { MouseEventHandler } from "react";
interface ButtonProps {
    children: string | number | boolean | {};
    onClick: MouseEventHandler<{}>;
}
declare const Button: React.FunctionComponent<ButtonProps>;
export default Button;
