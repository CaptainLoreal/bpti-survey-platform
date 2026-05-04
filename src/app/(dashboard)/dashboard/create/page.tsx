"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMockData } from "@/context/MockDataContext";
import styles from "./create.module.css";
import { ArrowRight, ArrowLeft, Users, Calendar, CheckCircle2, Link as LinkIcon, Copy, Mail } from "lucide-react";

export default function CreateSurvey() {
  const router = useRouter();
  const { contacts, addSurvey } = useMockData();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    participants: [] as string[],
    date: new Date().toISOString().split('T')[0]
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleFinish = () => {
    addSurvey({
      title: formData.title,
      date: formData.date,
      status: "Active",
      participants: formData.participants.length,
      responses: 0,
      participantIds: formData.participants
    });
    setStep(4);
  };

  const toggleParticipant = (id: string) => {
    if (formData.participants.includes(id)) {
      setFormData({ ...formData, participants: formData.participants.filter(p => p !== id) });
    } else {
      setFormData({ ...formData, participants: [...formData.participants, id] });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepper}>
        {[1, 2, 3].map((s) => (
          <div key={s} className={`${styles.step} ${step >= s ? styles.active : ""}`}>
            <div className={styles.stepCircle}>{s}</div>
            <span className={styles.stepLabel}>
              {s === 1 ? "Details" : s === 2 ? "Participants" : "Confirm"}
            </span>
            {s < 3 && <div className={styles.stepLine}></div>}
          </div>
        ))}
      </div>

      <div className={styles.card}>
        {step === 1 && (
          <div className={styles.formStep}>
            <h2 className={styles.stepTitle}>Survey Details</h2>
            <p className={styles.stepSubtitle}>Give your survey a name and set the timeframe.</p>
            
            <div className={styles.formGroup}>
              <label>Survey Title</label>
              <input 
                type="text" 
                placeholder="e.g. Q4 Engineering Culture Check" 
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label>Target Completion Date</label>
              <div className={styles.inputIcon}>
                <Calendar size={20} />
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
            </div>

            <div className={styles.actions}>
              <button className="btn-primary" onClick={handleNext} disabled={!formData.title}>
                Next: Participants <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.formStep}>
            <h2 className={styles.stepTitle}>Select Participants</h2>
            <p className={styles.stepSubtitle}>Choose who should take this survey from your contacts.</p>
            
            <div className={styles.contactList}>
              {contacts.map((contact) => (
                <div 
                  key={contact.id} 
                  className={`${styles.contactItem} ${formData.participants.includes(contact.id) ? styles.selected : ""}`}
                  onClick={() => toggleParticipant(contact.id)}
                >
                  <div className={styles.contactCheckbox}>
                    {formData.participants.includes(contact.id) && <CheckCircle2 size={18} />}
                  </div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactName}>{contact.firstName} {contact.lastName}</span>
                    <span className={styles.contactEmail}>{contact.email}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <button className="btn-secondary" onClick={handleBack}>
                <ArrowLeft size={18} /> Back
              </button>
              <button className="btn-primary" onClick={handleNext} disabled={formData.participants.length === 0}>
                Next: Confirm <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.formStep}>
            <h2 className={styles.stepTitle}>Confirm and Launch</h2>
            <p className={styles.stepSubtitle}>Review your survey settings before sending invites.</p>
            
            <div className={styles.reviewGrid}>
              <div className={styles.reviewItem}>
                <span className={styles.reviewLabel}>Title</span>
                <span className={styles.reviewValue}>{formData.title}</span>
              </div>
              <div className={styles.reviewItem}>
                <span className={styles.reviewLabel}>Participants</span>
                <span className={styles.reviewValue}>{formData.participants.length} team members</span>
              </div>
              <div className={styles.reviewItem}>
                <span className={styles.reviewLabel}>Target Date</span>
                <span className={styles.reviewValue}>{formData.date}</span>
              </div>
            </div>

            <div className={styles.actions}>
              <button className="btn-secondary" onClick={handleBack}>
                <ArrowLeft size={18} /> Back
              </button>
              <button className="btn-primary" onClick={handleFinish}>
                Launch Survey Now
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className={styles.successStep}>
            <div className={styles.successIcon}>
              <CheckCircle2 size={64} />
            </div>
            <h2 className={styles.stepTitle}>Survey Launched!</h2>
            <p className={styles.stepSubtitle}>Your survey is now active and ready for responses.</p>
            
            <div className={styles.shareSection}>
              <p className={styles.shareTitle}>Participant Access Link</p>
              <div className={styles.linkBox}>
                <LinkIcon size={18} />
                <input readOnly value={`http://localhost:3000/s/new-survey-id`} />
                <button className={styles.copyBtn}><Copy size={18} /></button>
              </div>
              <button className={styles.emailBtn}>
                <Mail size={18} /> Send Invites via Email
              </button>
            </div>

            <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => router.push("/dashboard")}>
              Return to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
