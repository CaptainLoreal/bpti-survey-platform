import styles from "./theidea.module.css";

export default function TheIdea() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>The Idea behind <span className={styles.accent}>BPTI</span></h1>
        <p className={styles.subtitle}>
          Standardized evaluation meets modern team development.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Why BPTI?</h2>
          <p>
            In today's fast-paced business environment, team culture is often the deciding factor between success and failure. Yet, many teams struggle to measure and articulate their cultural state. BPTI provides the common language and metrics needed to bridge this gap.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Evidence-Based Framework</h2>
          <p>
            The survey consists of 60 standardized items, carefully calibrated to reflect the core drivers of high-performance teams. By answering these questions anonymously, team members provide an honest snapshot of the current reality.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Actionable Reports</h2>
          <p>
            We don't just provide data; we provide clarity. Our reports highlight strengths to celebrate and specific areas for improvement, enabling teams to have focused, productive conversations about their growth.
          </p>
        </section>
      </div>
    </div>
  );
}
