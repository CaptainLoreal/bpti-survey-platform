"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../auth.module.css";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Log in to access your dashboard</p>
        
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">E-mail</label>
            <input type="email" id="email" className={styles.input} required placeholder="name@company.com" />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.input} required placeholder="••••••••" />
          </div>
          
          <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Sign In</button>
        </form>

        <div className={styles.switchAuth}>
          Don't have an account? <Link href="/register">Create Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
