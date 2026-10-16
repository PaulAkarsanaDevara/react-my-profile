import projectsBase from '../models/Project';
import { experience as experienceBase } from '../models/Experience';
import educationBase from '../models/Education';
import { aboutSummary as aboutSummaryEn } from '../models/About';
import { Lang } from './context';
import { projectsEn } from './content.en';
import { aboutSummaryId, educationId, experienceId } from './content.id';

const MONTHS: Record<Lang, Record<string, string>> = {
  en: { Mei: 'May', Agu: 'Aug', Agt: 'Aug', Okt: 'Oct', Des: 'Dec', Sekarang: 'Present' },
  id: { May: 'Mei', Aug: 'Agu', Oct: 'Okt', Dec: 'Des', Present: 'Sekarang' },
};

/** Translates the month names (and "Present") in strings like "Oct 2024". */
export const localizeDate = (value: string, lang: Lang): string =>
  value
    .split(' ')
    .map((part) => MONTHS[lang][part] ?? part)
    .join(' ');

export type Content = {
  projects: Project[];
  experience: Experience[];
  education: Education[];
  aboutSummary: string;
};

const build = (lang: Lang): Content => {
  const projects = projectsBase.map((project) => {
    const translated = lang === 'en' ? projectsEn[project.id] : undefined;
    return {
      ...project,
      ...translated,
      startDate: localizeDate(project.startDate, lang),
      endDate: localizeDate(project.endDate, lang),
    };
  });

  const experience = experienceBase.map((item) => ({
    ...item,
    ...(lang === 'id'
      ? experienceId[`${item.company}|${item.startDate}`]
      : undefined),
    startDate: localizeDate(item.startDate, lang),
    endDate: localizeDate(item.endDate, lang),
  }));

  const education = educationBase.map((item) => ({
    ...item,
    ...(lang === 'id' ? educationId[item.campus] : undefined),
  }));

  return {
    projects,
    experience,
    education,
    aboutSummary: lang === 'id' ? aboutSummaryId : aboutSummaryEn,
  };
};

const cache: Partial<Record<Lang, Content>> = {};

/** Content for a language, built once and reused. */
export const getContent = (lang: Lang): Content =>
  (cache[lang] ??= build(lang));
