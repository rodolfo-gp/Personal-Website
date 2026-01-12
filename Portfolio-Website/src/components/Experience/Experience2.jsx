import styles from "./Experience2.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const sectionTitles = {
  backend: "Backend Development",
  frontend: "Frontend Development",
  tools: "Tools and Cloud"
};

const formatTitle = (key) => {
  if (sectionTitles[key]) return sectionTitles[key];
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export const Experience2 = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.content}>
        {Object.entries(skills)
          .filter(([sectionKey]) => sectionKey !== "ai") // 🚫 exclude AI
          .map(([sectionKey, sectionSkills]) => (
            <div key={sectionKey} className={styles.skills}>
              <h3 className={styles.sub_title}>
                {formatTitle(sectionKey)}
              </h3>

              {sectionSkills.map((skill, id) => (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                    />
                  </div>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};
