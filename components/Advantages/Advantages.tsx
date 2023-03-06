import styles from "./Advantages.module.css";
import cn from "classnames";
import React from "react";
import CheckIcon from "./check.svg";
import { IAdvantagesProps } from "./Advantages.props";

export const Advantages = ({ advantages }: IAdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantages}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
