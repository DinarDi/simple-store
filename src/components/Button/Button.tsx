import React from "react";
import styles from "./Button.module.scss";

interface IButton {
  children?: React.ReactChild | React.ReactNode;
}

const Button: React.FC<IButton> = ({ children }) => {
  return <button className={`${styles.btn} cu-p`}>{children}</button>;
};

export default Button;
