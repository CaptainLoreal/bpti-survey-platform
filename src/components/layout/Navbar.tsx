"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeOpacity="0.3" />
            <polygon points="12 6 16.5 9.5 15 16 9 17 6 11 12 6" fill="currentColor" fillOpacity="0.8" />
          </svg>
          BPTI
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>Home</Link>
          <Link href="/about" className={`${styles.link} ${isActive('/about') ? styles.active : ''}`}>About Us</Link>
          <Link href="/theidea" className={`${styles.link} ${isActive('/theidea') ? styles.active : ''}`}>The Idea</Link>
          <Link href="/howto" className={`${styles.link} ${isActive('/howto') ? styles.active : ''}`}>How To</Link>
        </div>
        <div className={styles.authLinks}>
          <Link href="/login" className="btn-secondary">Log In</Link>
          <Link href="/register" className="btn-primary">Create Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
