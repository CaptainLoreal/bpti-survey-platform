"use client";

import { useState } from "react";
import { useMockData } from "@/context/MockDataContext";
import { UserPlus, Search, Mail, Edit2, Trash2 } from "lucide-react";

export default function Contacts() {
  const { contacts, isHydrated, addContact } = useMockData();
  const [showAdd, setShowAdd] = useState(false);
  const [newContact, setNewContact] = useState({ firstName: "", lastName: "", email: "", role: "" });

  if (!isHydrated) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addContact(newContact);
    setNewContact({ firstName: "", lastName: "", email: "", role: "" });
    setShowAdd(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-secondary)' }}>My Contacts</h1>
          <p style={{ color: 'var(--color-text-light)' }}>Manage your team members and survey participants.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setShowAdd(true)}>
          <UserPlus size={20} />
          Add Contact
        </button>
      </div>

      {showAdd && (
        <div className="card" style={{ marginBottom: '2rem', maxWidth: '600px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Add New Contact</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 500 }}>First Name</label>
                <input 
                  type="text" 
                  required 
                  style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
                  value={newContact.firstName}
                  onChange={e => setNewContact({...newContact, firstName: e.target.value})}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 500 }}>Last Name</label>
                <input 
                  type="text" 
                  required 
                  style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
                  value={newContact.lastName}
                  onChange={e => setNewContact({...newContact, lastName: e.target.value})}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 500 }}>Email Address</label>
              <input 
                type="email" 
                required 
                style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
                value={newContact.email}
                onChange={e => setNewContact({...newContact, email: e.target.value})}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 500 }}>Role / Department</label>
              <input 
                type="text" 
                placeholder="e.g. Senior Developer" 
                style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
                value={newContact.role}
                onChange={e => setNewContact({...newContact, role: e.target.value})}
              />
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="submit" className="btn-primary">Save Contact</button>
              <button type="button" className="btn-secondary" onClick={() => setShowAdd(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="card" style={{ padding: 0 }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>All Contacts ({contacts.length})</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', width: '300px' }}>
            <Search size={18} style={{ color: 'var(--color-text-light)' }} />
            <input type="text" placeholder="Search contacts..." style={{ background: 'none', border: 'none', width: '100%', fontSize: '0.9rem' }} />
          </div>
        </div>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
              <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Contact</th>
              <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Email</th>
              <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Role</th>
              <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} style={{ borderTop: '1px solid var(--color-border)' }}>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>{contact.firstName} {contact.lastName}</div>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-light)' }}>
                    <Mail size={16} />
                    {contact.email}
                  </div>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>{contact.role || '—'}</span>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--color-text-light)', cursor: 'pointer' }}><Edit2 size={18} /></button>
                    <button style={{ background: 'none', border: 'none', color: 'var(--color-text-light)', cursor: 'pointer' }}><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
