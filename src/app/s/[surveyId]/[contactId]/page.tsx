"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { bptiCatalog as BPTI_CATALOG } from "@/lib/bpti-catalog";

export default function ParticipantSurvey() {
  const { surveyId, contactId } = useParams();
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [currentDimensionIdx, setCurrentDimensionIdx] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});

  // Mock survey and contact details based on IDs
  const survey = { title: "Leadership Alignment Survey" };
  const contact = { firstName: "Jane" };

  if (completed) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-background)", padding: "2rem" }}>
        <div style={{ maxWidth: "500px", width: "100%", backgroundColor: "white", padding: "3rem", borderRadius: "16px", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
          <div style={{ width: "80px", height: "80px", backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h1 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "var(--color-secondary)" }}>Survey Completed!</h1>
          <p style={{ color: "var(--color-text-light)", marginBottom: "2rem", lineHeight: "1.6" }}>
            Thank you for your valuable feedback. Your responses have been recorded anonymously and will be included in the final team report.
          </p>
          <button 
            style={{ width: "100%", padding: "1rem", backgroundColor: "var(--color-primary)", color: "white", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: 600 }}
            onClick={() => window.close()}
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-background)", padding: "2rem" }}>
        <div style={{ maxWidth: "600px", width: "100%", backgroundColor: "white", padding: "3rem", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-primary)" }}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeOpacity="0.3" />
              <polygon points="12 6 16.5 9.5 15 16 9 17 6 11 12 6" fill="currentColor" fillOpacity="0.8" />
            </svg>
            <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-secondary)" }}>BPTI</span>
          </div>

          <h1 style={{ marginBottom: "0.5rem", fontSize: "2rem", color: "var(--color-secondary)" }}>Best Performance Team Survey</h1>
          <h2 style={{ color: "var(--color-primary)", marginBottom: "2rem", fontWeight: 500, fontSize: "1.25rem" }}>{survey.title}</h2>
          
          <div style={{ backgroundColor: "var(--color-background)", padding: "1.5rem", borderRadius: "12px", marginBottom: "3rem", borderLeft: "4px solid var(--color-primary)" }}>
            <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Hello <strong>{contact.firstName}</strong>,</p>
            <p style={{ color: "var(--color-text-light)", lineHeight: "1.6" }}>
              You have been invited to participate in the <strong>{survey.title}</strong>. This assessment measures the 6 core dimensions of the Best Performance Wheel (60 questions total). 
              Please answer honestly — all results are aggregated and anonymized in the final report.
            </p>
          </div>

          <button 
            style={{ width: "100%", padding: "1rem", fontSize: "1.1rem", backgroundColor: "var(--color-primary)", color: "white", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: 600, letterSpacing: "0.5px" }}
            onClick={() => setStarted(true)}
          >
            Start Survey
          </button>
        </div>
      </div>
    );
  }

  const currentDimension = BPTI_CATALOG[currentDimensionIdx];
  const isLastDimension = currentDimensionIdx === BPTI_CATALOG.length - 1;
  const progressPercentage = ((currentDimensionIdx) / BPTI_CATALOG.length) * 100;

  const handleResponse = (itemName: string, value: number) => {
    setResponses(prev => ({ ...prev, [itemName]: value }));
  };

  const handleNext = () => {
    if (isLastDimension) {
      setCompleted(true);
    } else {
      setCurrentDimensionIdx(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentDimensionIdx > 0) {
      setCurrentDimensionIdx(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-background)", fontFamily: "var(--font-inter), sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Header & Progress */}
        <div style={{ background: "white", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1.2rem", margin: 0, color: "var(--color-secondary)" }}>{survey.title}</h2>
            <span style={{ fontSize: "0.9rem", color: "var(--color-text-light)", fontWeight: 500 }}>
              Step {currentDimensionIdx + 1} of {BPTI_CATALOG.length}
            </span>
          </div>
          <div style={{ width: "100%", height: "8px", backgroundColor: "var(--color-background)", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ height: "100%", backgroundColor: "var(--color-primary)", width: `${progressPercentage}%`, transition: "width 0.3s ease" }}></div>
          </div>
        </div>

        {/* Survey Questions */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "1.5rem", color: "var(--color-primary)", marginBottom: "0.5rem" }}>{currentDimension.name}</h3>
          <p style={{ color: "var(--color-text-light)", marginBottom: "2rem", fontSize: "0.95rem" }}>
            Please rate the following statements from 1 (Not acceptable) to 5 (Best in Class).
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {currentDimension.items.map((item, idx) => (
              <div key={idx} style={{ paddingBottom: "1.5rem", borderBottom: idx !== currentDimension.items.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                <p style={{ fontWeight: 500, color: "var(--color-secondary)", marginBottom: "1rem", fontSize: "1.05rem" }}>{item}</p>
                <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "500px", margin: "0 auto", gap: "0.5rem" }}>
                  {[1, 2, 3, 4, 5].map(score => (
                    <button
                      key={score}
                      onClick={() => handleResponse(item, score)}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        border: responses[item] === score ? `2px solid var(--color-primary)` : "1px solid var(--color-border)",
                        backgroundColor: responses[item] === score ? "var(--color-primary-light)" : "white",
                        color: responses[item] === score ? "var(--color-primary)" : "var(--color-text-light)",
                        fontSize: "1.1rem",
                        fontWeight: responses[item] === score ? 700 : 500,
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-border)" }}>
            <button
              onClick={handleBack}
              disabled={currentDimensionIdx === 0}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "1px solid var(--color-border)",
                backgroundColor: "white",
                color: currentDimensionIdx === 0 ? "var(--color-text-light)" : "var(--color-secondary)",
                cursor: currentDimensionIdx === 0 ? "not-allowed" : "pointer",
                fontWeight: 600,
                opacity: currentDimensionIdx === 0 ? 0.5 : 1
              }}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "var(--color-primary)",
                color: "white",
                cursor: "pointer",
                fontWeight: 600
              }}
            >
              {isLastDimension ? "Submit Responses" : "Next"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
