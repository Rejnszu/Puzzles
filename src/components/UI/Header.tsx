import React from "react";
import styles from "./Header.module.scss";
interface HeaderProps {
  children: React.ReactNode;
}
const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
