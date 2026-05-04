import Link from "next/link";
import styles from "./howto.module.css";

export default function HowTo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heroHeading}>
        How to <strong>create a survey</strong>
      </h1>

      <div className={styles.timeline}>
        {/* Step 1 */}
        <div className={styles.step}>
          <span className={styles.stepNumber}>1</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Create your dashboard</h3>
            <p className={styles.stepDescription}>
              Enter your name, e-mail address and choose a password.
            </p>
            <div className={styles.stepAction}>
              <Link href="/register" className={styles.stepBtn}>
                Create Dashboard →
              </Link>
            </div>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.stepVisualInner}>
              <span className={styles.stepIcon}>📋</span>
              <span>Registration Form</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className={styles.stepReverse}>
          <span className={styles.stepNumber}>2</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Choose a survey title</h3>
            <p className={styles.stepDescription}>
              Assign a name to your survey so you can differentiate your teams
              easily (e.g. according to the organizational unit or department).
            </p>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.stepVisualInner}>
              <span className={styles.stepIcon}>✏️</span>
              <span>Survey Title Setup</span>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className={styles.step}>
          <span className={styles.stepNumber}>3</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Invite participants</h3>
            <p className={styles.stepDescription}>
              Enter the e-mail addresses of your team members.
            </p>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.stepVisualInner}>
              <span className={styles.stepIcon}>✉️</span>
              <span>Participant Invitations</span>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className={styles.stepReverse}>
          <span className={styles.stepNumber}>4</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Set time frame and reminders</h3>
            <p className={styles.stepDescription}>
              Decide when you want your survey to start and to end.
            </p>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.stepVisualInner}>
              <span className={styles.stepIcon}>📅</span>
              <span>Schedule &amp; Reminders</span>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className={styles.step}>
          <span className={styles.stepNumber}>5</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>
              Answer introductory questions
            </h3>
            <p className={styles.stepDescription}>
              Answer 12 introductory questions about your business environment
              and team characteristics precisely in order to get the most useful
              comparison to other teams.
            </p>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.stepVisualInner}>
              <span className={styles.stepIcon}>❓</span>
              <span>Introductory Questions</span>
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className={styles.stepReverse}>
          <span className={styles.stepNumber}>6</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Get your free team report</h3>
            <p className={styles.stepDescription}>
              After completing the survey, you will receive a direct link to
              your unique team report.
            </p>
            <div className={styles.stepAction}>
              <Link
                href="http://team-hpti.com/resources/img/report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.stepBtnSecondary}
              >
                Sample Report ↗
              </Link>
            </div>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.stepVisualInner}>
              <span className={styles.stepIcon}>📊</span>
              <span>Team Report</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to get started?</h2>
        <p className={styles.ctaSubtitle}>
          Create your free dashboard and launch your first survey in minutes.
        </p>
        <Link href="/register" className={styles.ctaBtn}>
          Start now! →
        </Link>
      </div>
    </div>
  );
}
