import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeOpacity="0.3" />
              <polygon points="12 6 16.5 9.5 15 16 9 17 6 11 12 6" fill="currentColor" fillOpacity="0.8" />
            </svg>
            BPTI
          </div>
          <p className={styles.description}>
            Best Performance Team Survey. Evaluate your team's core cultural drivers.
          </p>
        </div>
        <div className={styles.links}>
          <Link href="/contact">Contact us</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} BPTI AG. All rights reserved.
      </div>
    </footer>
  );
}
