"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type SurveyStatus = "Draft" | "Active" | "Completed";

export interface Survey {
  id: string;
  title: string;
  date: string;
  status: SurveyStatus;
  participants: number;
  responses: number;
  participantIds?: string[];
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface MockDataContextType {
  surveys: Survey[];
  contacts: Contact[];
  addSurvey: (survey: Omit<Survey, "id">) => void;
  updateSurvey: (id: string, updates: Partial<Survey>) => void;
  addContact: (contact: Omit<Contact, "id">) => void;
  updateContact: (id: string, updates: Partial<Contact>) => void;
  isHydrated: boolean;
}

const defaultSurveys: Survey[] = [
  { id: "1", title: "Q3 Engineering Team Check-in", date: "2026-07-01", status: "Completed", participants: 12, responses: 12, participantIds: ["1", "2"] },
  { id: "2", title: "Leadership Alignment Survey", date: "2026-08-15", status: "Active", participants: 5, responses: 3, participantIds: ["2"] },
  { id: "3", title: "Sales Team Quarterly Pulse", date: "2026-09-01", status: "Draft", participants: 1, responses: 0, participantIds: ["3"] },
];

const defaultContacts: Contact[] = [
  { id: "1", firstName: "Jane", lastName: "Smith", email: "jane@company.com", role: "Engineer" },
  { id: "2", firstName: "John", lastName: "Doe", email: "john@company.com", role: "Manager" },
  { id: "3", firstName: "Alice", lastName: "Johnson", email: "alice@company.com", role: "Designer" },
];

const MockDataContext = createContext<MockDataContextType | undefined>(undefined);

export function MockDataProvider({ children }: { children: React.ReactNode }) {
  const [surveys, setSurveys] = useState<Survey[]>(defaultSurveys);
  const [contacts, setContacts] = useState<Contact[]>(defaultContacts);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedSurveys = localStorage.getItem("bpti_surveys");
    if (savedSurveys) {
      try { setSurveys(JSON.parse(savedSurveys)); } catch (e) {}
    }
    const savedContacts = localStorage.getItem("bpti_contacts");
    if (savedContacts) {
      try { setContacts(JSON.parse(savedContacts)); } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("bpti_surveys", JSON.stringify(surveys));
    }
  }, [surveys, isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("bpti_contacts", JSON.stringify(contacts));
    }
  }, [contacts, isClient]);

  const addSurvey = (survey: Omit<Survey, "id">) => {
    setSurveys([...surveys, { ...survey, id: Math.random().toString(36).substr(2, 9) }]);
  };

  const updateSurvey = (id: string, updates: Partial<Survey>) => {
    setSurveys(surveys.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const addContact = (contact: Omit<Contact, "id">) => {
    setContacts([...contacts, { ...contact, id: Math.random().toString(36).substr(2, 9) }]);
  };

  const updateContact = (id: string, updates: Partial<Contact>) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, ...updates } : c));
  };

  return (
    <MockDataContext.Provider value={{ surveys, contacts, addSurvey, updateSurvey, addContact, updateContact, isHydrated: isClient }}>
      {children}
    </MockDataContext.Provider>
  );
}

export function useMockData() {
  const context = useContext(MockDataContext);
  if (context === undefined) {
    throw new Error("useMockData must be used within a MockDataProvider");
  }
  return context;
}
