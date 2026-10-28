export interface FeatureItem {
  id: string;
  title: string;
  category: 'academic' | 'finance' | 'admin' | 'communication';
  description: string;
  iconName: string;
  badge?: string;
}

export interface SystemModule {
  id: string;
  name: string;
  summary: string;
  icon: string;
  subItems: string[];
}

export interface PricingComparisonRow {
  feature: string;
  standard: boolean;
  dynamic: boolean;
  note?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface StudentRecord {
  id: string;
  roll: string;
  name: string;
  studentClass: string;
  section: string;
  guardianPhone: string;
  gpa: string;
  attendanceStatus: 'present' | 'absent' | 'late';
  feeDue: number;
}
