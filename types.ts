import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  requirements: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  QUALITY = 'QUALITY',
  CONTACT = 'CONTACT',
  CAREERS = 'CAREERS',
  ADMIN_LOGIN = 'ADMIN_LOGIN',
  ADMIN_DASHBOARD = 'ADMIN_DASHBOARD'
}