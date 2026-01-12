import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.header}>
        <h2 className={styles.title}>Experience</h2>
        <p className={styles.subtitle}>
          Roles, projects, and hands-on experience.
        </p>
      </div>

      <ul className={styles.timeline}>
        {history.map((item, idx) => (
          <li key={idx} className={styles.timelineItem}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.logoWrap}>
                  <img
                    src={getImageUrl(item.imageSrc)}
                    alt={`${item.organisation} Logo`}
                    className={styles.logo}
                    loading="lazy"
                  />
                </div>

                <div className={styles.meta}>
                  <h3 className={styles.role}>
                    {item.role}
                    <span className={styles.org}>
                      {" "}
                      · {item.organisation}
                    </span>
                  </h3>
                  <p className={styles.dates}>
                    {item.startDate} — {item.endDate}
                  </p>
                </div>
              </div>

              <ul className={styles.bullets}>
                {item.experiences.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
