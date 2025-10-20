export type Language = 'fa' | 'en';

export interface Translation {
  [key: string]: {
    fa: string;
    en: string;
  };
}