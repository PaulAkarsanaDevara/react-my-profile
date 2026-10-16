import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { I18nContext, Lang } from './context';
import { en, Key } from './locales/en';
import { id } from './locales/id';

const STORAGE_KEY = 'lang';
const dictionaries: Record<Lang, Record<Key, string>> = { en, id };

/** English is the default; only an explicit earlier choice switches to Indonesian. */
const readStoredLang = (): Lang => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'id' ? 'id' : 'en';
  } catch {
    return 'en';
  }
};

const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: the choice just lasts for this visit */
    }
  }, []);

  const value = useMemo(() => {
    const dictionary = dictionaries[lang];
    const t = (key: Key, vars?: Record<string, string | number>) => {
      const text = dictionary[key] ?? en[key];
      if (!vars) return text;
      return text.replace(/\{(\w+)\}/g, (match, name) =>
        name in vars ? String(vars[name]) : match
      );
    };
    return { lang, setLang, t };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export default I18nProvider;
