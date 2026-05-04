"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../auth.module.css";

export default function Register() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.title}>Create Dashboard</h1>
        <p className={styles.subtitle}>Set up your account to start surveying</p>
        
        <form className={styles.form} onSubmit={handleRegister}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" className={styles.input} required placeholder="Jane" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" className={styles.input} required placeholder="Doe" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">E-mail</label>
            <input type="email" id="email" className={styles.input} required placeholder="name@company.com" />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.input} required placeholder="••••••••" />
          </div>
          
          <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Register</button>
        </form>

        <div className={styles.switchAuth}>
          Already have an account? <Link href="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
