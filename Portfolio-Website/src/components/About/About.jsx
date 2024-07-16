// import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="me with my laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I have experience developing <br/>
                back-end systems managing databases, and APIs
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontendIcon.png")} alt="frontend Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I have experience in building responsive
                and interactive sites with login, signup, and authentication
              </p>
            </div>
          </li>
            
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/educationIcon.png")} alt="education icon"/>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                B.S in Software Engineering,<br/>
                Schulich School of Engineering,<br/>
                University of Calgary, AB, CA
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
