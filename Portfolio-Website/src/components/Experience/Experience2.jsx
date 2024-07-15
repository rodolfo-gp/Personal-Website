import styles from "./Experience2.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience2 = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.content}>
        <div className={styles.skills}>
          <h3 className={styles.sub_title}>Backend</h3>
          {skills.backend.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.skills}>
          <h3 className={styles.sub_title}>Frontend</h3>
          {skills.frontend.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
