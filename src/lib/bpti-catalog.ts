export interface BPTIDimension {
  id: string;
  name: string;
  items: string[];
}

export const bptiCatalog: BPTIDimension[] = [
  {
    id: "dim_1",
    name: "Trust & Psychological Safety",
    items: [
      "1.1 I can address critical issues within the team without having to fear any negative consequences.",
      "1.2 Even when things go wrong, we can count on each other.",
      "1.3 People in this team sometimes reject others for being different. (Reversed)",
      "1.4 It is safe to take a risk in this team.",
      "1.5 It is difficult to ask other members of this team for help. (Reversed)",
      "1.6 No one in this team would deliberately act in a way that undermines my efforts.",
      "1.7 Working with members of this team, my unique skills and talents are valued and utilized.",
      "1.8 Feedback is given regularly and respectfully.",
      "1.9 We trust each other's competence.",
      "1.10 We treat each other with appreciation and respect."
    ]
  },
  {
    id: "dim_2",
    name: "Shared Vision & Goals",
    items: [
      "2.1 Our team has a clear and inspiring vision.",
      "2.2 We all know and support our team's main objectives.",
      "2.3 Every team member knows their contribution to the overall success.",
      "2.4 We regularly review our progress towards our goals.",
      "2.5 Our goals are challenging but achievable.",
      "2.6 The team's priorities are clear to everyone.",
      "2.7 We have a shared understanding of what success looks like.",
      "2.8 Individual goals are aligned with team goals.",
      "2.9 We celebrate achieving our milestones.",
      "2.10 The team leader communicates the vision effectively."
    ]
  },
  {
    id: "dim_3",
    name: "Communication & Collaboration",
    items: [
      "3.1 Information flows freely within our team.",
      "3.2 We collaborate effectively across different functions.",
      "3.3 Our meetings are productive and focused.",
      "3.4 We use appropriate tools for communication.",
      "3.5 Everyone's voice is heard during discussions.",
      "3.6 We resolve disagreements in a timely manner.",
      "3.7 Knowledge is shared openly among team members.",
      "3.8 We are responsive to each other's requests.",
      "3.9 The team works together as a cohesive unit.",
      "3.10 Communication with stakeholders is clear and consistent."
    ]
  },
  {
    id: "dim_4",
    name: "Empowerment & Accountability",
    items: [
      "4.1 I have the authority to make decisions related to my work.",
      "4.2 We take ownership of our results, both good and bad.",
      "4.3 Team members hold each other accountable for high performance.",
      "4.4 We are encouraged to take initiative.",
      "4.5 The team leader delegates responsibility effectively.",
      "4.6 We learn from our mistakes instead of blaming each other.",
      "4.7 We are given the autonomy to decide how to do our work.",
      "4.8 Expectations for performance are clearly defined.",
      "4.9 We consistently meet our deadlines and commitments.",
      "4.10 The team leader provides support when needed."
    ]
  },
  {
    id: "dim_5",
    name: "Personal Growth & Well-being",
    items: [
      "5.1 My work gives me a sense of accomplishment.",
      "5.2 The team environment supports my personal development.",
      "5.3 We look out for each other's well-being.",
      "5.4 There is a good balance between work and personal life.",
      "5.5 I am recognized for my contributions.",
      "5.6 We have opportunities to learn new skills.",
      "5.7 The team members know each other's strengths and weaknesses.",
      "5.8 There is a healthy sense of humor in the team.",
      "5.9 There is a genuine mutual interest in each other's success.",
      "5.10 The team leader ensures fairness in the team."
    ]
  },
  {
    id: "dim_6",
    name: "Operational Excellence",
    items: [
      "6.1 There are consequences for disregarding or breaking agreements, or if performance expectations are not met.",
      "6.2 Conflicts are dealt with in a constructive manner.",
      "6.3 The team collaborates optimally with internal and external stakeholders.",
      "6.4 Where it makes sense, the objectives are S.M.A.R.T.: specific, measurable, attainable, realistic and timely.",
      "6.5 Team members have access to all necessary resources (information, work equipment in up-to-date functionality).",
      "6.6 The team members know and respect their stress limits (self-management).",
      "6.7 Team members continuously try to improve processes and develop new ideas.",
      "6.8 Data security is guaranteed at all times.",
      "6.9 Team members use or build their personal networks to improve team performance.",
      "6.10 Safety at work is the highest priority at any time."
    ]
  }
];
