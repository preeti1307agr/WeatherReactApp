import React from "react";
import {ButtonStyle} from "../Button/Button.style";

const Button = (props) => {
    // Render a button with ButtonStyle and spread the props
    return <ButtonStyle type="button" {...props}>Click Me!</ButtonStyle>
}

export default Button;