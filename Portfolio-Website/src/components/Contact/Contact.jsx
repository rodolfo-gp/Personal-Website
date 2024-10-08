//import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIconBlack.png")} alt="Email icon" />
          <a href="mailto:rodolfoandresgp@hotmail.com"><p>rodolfoandresgp@hotmail.com</p></a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIconBlack.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rodolfo-gp/" target="_blank">linkedin.com/rodolfo-gp</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIconBlack.png")} alt="Github icon" />
          <a href="https://www.github.com/rodolfo-gp" target="_blank">github.com/rodolfo-gp</a>
        </li>
      </ul>
    </footer>
  );
};
