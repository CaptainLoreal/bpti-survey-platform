import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            The culture survey for <span className={styles.accent}>modern teams</span>
          </h1>
          <p className={styles.subtitle}>
            BPTI helps you evaluate your team's core cultural drivers, trust, and performance using a standardized 60-item framework.
          </p>
          <div className={styles.heroActions}>
            <Link href="/register" className="btn-primary">Launch Free Survey</Link>
            <Link href="/howto" className="btn-secondary">How it works</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>
            <img src="/performance-wheel.png" alt="BPTI Performance Wheel" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🛡️</div>
          <h3>Psychological Safety</h3>
          <p>Measure the level of trust and safety within your team environment.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🎯</div>
          <h3>Goal Alignment</h3>
          <p>Ensure everyone is moving in the same direction with shared vision.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>⚡</div>
          <h3>Operational Excellence</h3>
          <p>Optimize your team's day-to-day collaboration and execution.</p>
        </div>
      </section>
    </div>
  );
}
