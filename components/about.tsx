import React from "react";
import styles from "../styles/About.module.css";

export default function about() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.content}>Hey there 👋</p>
      <p className={styles.content}>
        My name is Jade and I love building useful things. Check out my projects
        or send me a message!
      </p>
    </div>
  );
}
