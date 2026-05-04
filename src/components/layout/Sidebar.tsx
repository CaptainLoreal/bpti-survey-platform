"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, User, LogOut, PlusCircle } from "lucide-react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "My Surveys", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Contacts", href: "/dashboard/contacts", icon: Users },
    { name: "My Profile", href: "/dashboard/profile", icon: User },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Link href="/dashboard" className={styles.logo}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeOpacity="0.3" />
            <polygon points="12 6 16.5 9.5 15 16 9 17 6 11 12 6" fill="currentColor" fillOpacity="0.8" />
          </svg>
          <span style={{ marginLeft: '0.5rem' }}>BPTI Dashboard</span>
        </Link>
      </div>

      <div className={styles.createBtnContainer}>
        <Link href="/dashboard/create" className={`btn-primary ${styles.createBtn}`}>
          <PlusCircle size={20} />
          <span>Create Survey</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
          // For the main dashboard, we want an exact match or a specific sub-path like /dashboard/report
          const isDashboardActive = item.href === '/dashboard' && (pathname === '/dashboard' || pathname.startsWith('/dashboard/report'));
          
          const active = isActive || isDashboardActive;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.navItem} ${active ? styles.active : ""}`}
            >
              <item.icon size={20} className={styles.icon} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.bottomNav}>
        <Link href="/" className={styles.navItem}>
          <LogOut size={20} className={styles.icon} />
          <span>Log out</span>
        </Link>
      </div>
    </aside>
  );
}
