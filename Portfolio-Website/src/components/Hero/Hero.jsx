// import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("hero/heroImage2.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Hey, I'm 
          <br />
          Rodolfo Gil-Pereira
        </h1>
        <p className={styles.description}>
          I'm a 3rd Year Software Engineering Student
          <br />
          at the University of Calgary.
        </p>
        <div className={styles.buttons}>
          <a href="#contact" className={styles.contactBtn}>
            Contact
          </a>
          <a href="/resume.pdf" className={styles.resumeBtn} target="_blank">
            Resume
          </a>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
