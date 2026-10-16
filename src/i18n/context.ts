import { createContext } from 'react';
import type { Key } from './locales/en';

export type Lang = 'en' | 'id';

export type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Looks up a UI string; `{name}` placeholders are filled from `vars`. */
  t: (key: Key, vars?: Record<string, string | number>) => string;
};

export const I18nContext = createContext<I18nValue | null>(null);
