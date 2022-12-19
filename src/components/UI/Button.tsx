import React from "react";
import styles from "./Button.module.scss";
interface ButtonProps {
  children: React.ReactNode;
  style?: string;
  onClick: () => void;
}
const Button = ({ style, children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${style}`}>
      {children}
    </button>
  );
};

export default Button;
