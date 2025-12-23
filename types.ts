export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // For the detailed page
  tags: string[];
  iconName: string; // Mapping to Lucide icons
  route: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  url?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface DonationTier {
  name: string;
  amount: number;
  perks: string[];
  popular?: boolean;
}

export enum PixcidentSection {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Work = 'work',
  Contact = 'contact'
}
