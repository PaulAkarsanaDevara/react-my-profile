import { useContext } from 'react';
import { I18nContext, I18nValue } from './context';

export const useI18n = (): I18nValue => {
  const value = useContext(I18nContext);
  if (!value) throw new Error('useI18n must be used inside <I18nProvider>');
  return value;
};
