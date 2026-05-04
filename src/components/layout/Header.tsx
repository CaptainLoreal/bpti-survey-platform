"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Bell, Menu } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    
    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.menuBtn}>
          <Menu size={24} />
        </button>
        <h2 className={styles.title}>Dashboard</h2>
      </div>
      <div className={styles.right}>
        <div style={{ position: 'relative' }} ref={notifRef}>
          <button className={styles.iconBtn} onClick={() => setShowNotifications(!showNotifications)}>
            <Bell size={20} />
            <span className={styles.badge}></span>
          </button>
          
          {showNotifications && (
            <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: '1rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '320px', zIndex: 50, padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                <h4 style={{ margin: 0, color: 'var(--color-secondary)' }}>Notifications</h4>
                <Link href="/dashboard/notifications" style={{ fontSize: '0.85rem', color: 'var(--color-primary)', textDecoration: 'none' }} onClick={() => setShowNotifications(false)}>View all</Link>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
                  <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '0.25rem' }}>New Response Received</p>
                  <p style={{ color: 'var(--color-text-light)' }}>John Doe completed the "Leadership Alignment Survey".</p>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '0.75rem', marginTop: '0.25rem' }}>10 mins ago</p>
                </div>
                
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
                  <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '0.25rem' }}>Survey Completed</p>
                  <p style={{ color: 'var(--color-text-light)' }}>"Q3 Engineering Team Check-in" has reached 100% participation.</p>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '0.75rem', marginTop: '0.25rem' }}>2 hours ago</p>
                </div>
              </div>

              <button style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', padding: 0, width: '100%', textAlign: 'center' }} onClick={() => setShowNotifications(false)}>Mark all as read</button>
            </div>
          )}
        </div>
        <Link href="/dashboard/profile" className={styles.profile} style={{ textDecoration: 'none' }}>
          <div className={styles.avatar}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
          <span className={styles.name}>Jane Doe</span>
        </Link>
      </div>
    </header>
  );
}
