"use client";

import Link from "next/link";
import { useMockData } from "@/context/MockDataContext";
import styles from "./page.module.css";
import { PlusCircle, Search, MoreHorizontal, FileText, Activity, CheckCircle, Clock } from "lucide-react";

export default function Dashboard() {
  const { surveys, isHydrated } = useMockData();

  if (!isHydrated) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Welcome back, Jane</h1>
          <p className={styles.subtitle}>You have {surveys.length} active surveys in your dashboard.</p>
        </div>
        <Link href="/dashboard/create" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <PlusCircle size={20} />
          Create New Survey
        </Link>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)' }}>
            <Activity size={24} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Total Surveys</span>
            <span className={styles.statValue}>{surveys.length}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ color: 'var(--color-success)', backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
            <CheckCircle size={24} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Completed</span>
            <span className={styles.statValue}>{surveys.filter(s => s.status === 'Completed').length}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ color: 'var(--color-warning)', backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
            <Clock size={24} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Active</span>
            <span className={styles.statValue}>{surveys.filter(s => s.status === 'Active').length}</span>
          </div>
        </div>
      </div>

      <div className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <h2 className={styles.tableTitle}>Recent Surveys</h2>
          <div className={styles.searchBar}>
            <Search size={18} />
            <input type="text" placeholder="Search surveys..." />
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Survey Title</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Responses</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {surveys.map((survey) => (
                <tr key={survey.id}>
                  <td>
                    <div className={styles.surveyName}>
                      <FileText size={18} style={{ color: 'var(--color-text-light)' }} />
                      <span>{survey.title}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`${styles.status} ${styles[survey.status.toLowerCase()]}`}>
                      {survey.status}
                    </span>
                  </td>
                  <td>{survey.date}</td>
                  <td>
                    <div className={styles.progress}>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${(survey.responses / survey.participants) * 100}%` }}
                        ></div>
                      </div>
                      <span>{survey.responses}/{survey.participants}</span>
                    </div>
                  </td>
                  <td>
                    <Link href={`/dashboard/report/${survey.id}`} className={styles.actionBtn}>
                      View Report
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
