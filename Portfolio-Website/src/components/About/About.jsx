import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/heroImage5.jpg")}
          alt="me with my laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I build reliable backend systems and REST APIs, design data models,
                and work with databases to support scalable, real world applications.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontendicon.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I create responsive and accessible user interfaces with modern React patterns,
                focusing on clean component structure, smooth interactions, and a strong user experience
                across different screen sizes.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ai_icon.png")} alt="AI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI and LLM Applications</h3>
              <p>
                I have built AI powered applications using large language models and
                Retrieval Augmented Generation, combining vector search with backend systems
                to produce grounded and reliable results for research focused workflows.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/educationIcon.png")} alt="Education icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                B.S. in Software Engineering<br />
                Schulich School of Engineering<br />
                University of Calgary, AB, Canada
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
