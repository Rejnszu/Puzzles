import React from "react";
import styles from "./SelectLayout.module.scss";
import { imagesArray } from "../../../../helpers/Images";
import Select from "./Select";

const SelectLayout = () => {
  return (
    <div className={styles["select-layout"]}>
      {imagesArray.map((obj) => {
        return <Select key={obj.title} title={obj.title} img={obj.images[0]} />;
      })}
    </div>
  );
};

export default SelectLayout;
