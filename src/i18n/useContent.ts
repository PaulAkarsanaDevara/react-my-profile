import { Content, getContent } from './content';
import { useI18n } from './useI18n';

/** Projects, experience, education and the About summary in the current language. */
export const useContent = (): Content => getContent(useI18n().lang);
