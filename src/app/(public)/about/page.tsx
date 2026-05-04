import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{ textAlign: 'center' }}>About <span className={styles.accent}>BPTI</span></h1>
      <div style={{ maxWidth: '800px', margin: '3rem auto', lineHeight: '1.8', color: 'var(--color-text)' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          The Best Performance Team Survey (BPTI) is a scientific approach to understanding team dynamics and cultural performance drivers. Developed by experts in organizational psychology, it provides a structured framework for teams to evaluate themselves across six key dimensions.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Our mission is to empower teams with data-driven insights that lead to better collaboration, higher trust, and superior operational results.
        </p>
        <h2 style={{ color: 'var(--color-secondary)', marginTop: '3rem', marginBottom: '1rem' }}>The 6 Dimensions of Excellence</h2>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Trust & Psychological Safety</li>
          <li>Shared Vision & Goals</li>
          <li>Communication & Collaboration</li>
          <li>Empowerment & Accountability</li>
          <li>Personal Growth & Well-being</li>
          <li>Operational Excellence</li>
        </ul>
      </div>
    </div>
  );
}
