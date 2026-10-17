import type { I18nValue } from '../i18n/context';

interface FormatDate {
  date: string;
  t: I18nValue['t'];
}

/** "2 days ago" style text for a date, in the language `t` translates to. */
const postedAt = ({ date, t }: FormatDate): string => {
  const diff = Date.now() - new Date(date).getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // average 30 days per month
  const years = Math.floor(days / 365); // average 365 days per year

  if (years > 0) return t('ago.year', { n: years });
  if (months > 0) return t('ago.month', { n: months });
  if (weeks > 0) return t('ago.week', { n: weeks });
  if (days > 0) return t('ago.day', { n: days });
  if (hours > 0) return t('ago.hour', { n: hours });
  if (minutes > 0) return t('ago.minute', { n: minutes });
  return t('ago.now');
};

export { postedAt };
