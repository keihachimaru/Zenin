// types.ts
// Central types for Zenin

/** -------------------
 * USER & PROFILE
 * ------------------- */
export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  level: number;
  xp: number;
  coins: number;
  createdAt: string;
  updatedAt: string;
  settings?: UserSettings;
  // optional for analytics
  moodTracking?: MoodEntry[];
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  customEmojis?: string[];
  notificationsEnabled: boolean;
  calendarSyncEnabled: boolean;
}

/** -------------------
 * GOALS & QUESTS
 * ------------------- */
export interface Goal {
  id: string;
  userId: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
  xpEarned?: number;
  campaignId?: string;
  arcId?: string;
  quests: Quest[];
}

export interface Quest {
  id: string;
  goalId: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
  xp: number;
  rewardCoins?: number;
  cooldownSeconds?: number;
}

/** -------------------
 * CAMPAIGNS & ARCS
 * ------------------- */
export interface Campaign {
  id: string;
  userId: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  arcId?: string;
  goalIds: string[];
}

export interface Arc {
  id: string;
  userId: string;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  campaignIds: string[];
}

/** -------------------
 * REWARDS & SHOP
 * ------------------- */
export interface Reward {
  id: string;
  title: string;
  description?: string;
  costCoins: number;
  type: 'theme' | 'emoji' | 'badge';
  createdAt: string;
  updatedAt: string;
}

export interface UserReward {
  id: string;
  userId: string;
  rewardId: string;
  acquiredAt: string;
}

/** -------------------
 * XP EVENTS
 * ------------------- */
export interface XPEvent {
  id: string;
  userId: string;
  questId?: string;
  goalId?: string;
  xp: number;
  createdAt: string;
  description?: string;
}

/** -------------------
 * ANALYTICS & MOOD
 * ------------------- */
export interface MoodEntry {
  id: string;
  userId: string;
  mood: 'happy' | 'neutral' | 'sad' | 'stressed' | 'excited';
  notes?: string;
  createdAt: string;
}

/** -------------------
 * NOTIFICATIONS
 * ------------------- */
export interface Notification {
  id: string;
  userId: string;
  title: string;
  body: string;
  read: boolean;
  createdAt: string;
  scheduledAt?: string; // for reminders
}

/** -------------------
 * GOOGLE CALENDAR SYNC
 * ------------------- */
export interface CalendarEvent {
  id: string;
  userId: string;
  questId?: string;
  goalId?: string;
  title: string;
  startDate: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}

/** -------------------
 * OPTIONAL — CLASSES & ABILITIES (for gamification stretch)
 * ------------------- */
export interface UserClass {
  id: string;
  userId: string;
  className: string;
  abilities: Ability[];
  createdAt: string;
}

export interface Ability {
  id: string;
  name: string;
  description?: string;
  effect: string; // could describe bonus like "+10% XP" or "+coins per quest"
  cooldownSeconds?: number;
  createdAt: string;
}