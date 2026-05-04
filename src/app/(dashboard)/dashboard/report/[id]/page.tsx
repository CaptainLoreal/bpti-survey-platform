"use client";

import { useMockData } from "@/context/MockDataContext";
import { useParams } from "next/navigation";
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

export default function ReportPage() {
  const { id } = useParams();
  const { surveys, isHydrated } = useMockData();
  
  if (!isHydrated) return null;
  
  const survey = surveys.find(s => s.id === id);
  if (!survey) return <div>Survey not found</div>;

  // Mock data for the charts
  const radarData = [
    { subject: 'Trust', A: 120, fullMark: 150 },
    { subject: 'Goals', A: 98, fullMark: 150 },
    { subject: 'Comm.', A: 86, fullMark: 150 },
    { subject: 'Account.', A: 99, fullMark: 150 },
    { subject: 'Growth', A: 85, fullMark: 150 },
    { subject: 'Ops', A: 65, fullMark: 150 },
  ];

  const barData = [
    { name: 'Trust', score: 4.2 },
    { name: 'Goals', score: 3.8 },
    { name: 'Comm.', score: 3.5 },
    { name: 'Account.', score: 4.0 },
    { name: 'Growth', score: 3.2 },
    { name: 'Ops', score: 2.8 },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-secondary)' }}>{survey.title}</h1>
          <p style={{ color: 'var(--color-text-light)' }}>Report generated on {new Date().toLocaleDateString()}</p>
        </div>
        <button className="btn-secondary" onClick={() => window.print()}>Download PDF</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Performance Wheel</h3>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--color-text-light)', fontSize: 12 }} />
                <Radar name="Score" dataKey="A" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Dimension Breakdown</h3>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--color-border)" />
                <XAxis type="number" domain={[0, 5]} hide />
                <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
                <Bar dataKey="score" fill="var(--color-primary)" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1.5rem' }}>Detailed Analysis</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {barData.map((item) => (
            <div key={item.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600 }}>{item.name}</span>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{item.score} / 5.0</span>
              </div>
              <div style={{ height: '8px', width: '100%', backgroundColor: 'var(--color-background)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(item.score / 5) * 100}%`, backgroundColor: item.score > 3.5 ? 'var(--color-success)' : item.score > 2.5 ? 'var(--color-warning)' : 'var(--color-error)' }}></div>
              </div>
              <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                {item.score > 3.5 ? "Your team shows high maturity in this dimension. Continue to maintain these standards." : "This area requires attention. Focus on building stronger alignment and process efficiency."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
