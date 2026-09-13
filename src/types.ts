export interface ChapterSection {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  summary: string;
}

export interface CoordinateSystemInfo {
  name: string;
  domain: string;
  pros: string;
  caveats: string;
  commonUse: string;
  datumDetails: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  detail: string;
  category: 'offline-map' | 'gpx' | 'hardware' | 'team';
}

export interface TakeawayItem {
  number: number;
  title: string;
  coreRule: string;
  actionableGuidance: string;
}
