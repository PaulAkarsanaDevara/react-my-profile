import { useI18n } from '../../../../i18n/useI18n';
import { Lang } from '../../../../i18n/context';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'id', label: 'ID' },
];

/** Two-option switch between English and Indonesian. */
const LanguageToggle = () => {
  const { lang, setLang, t } = useI18n();

  return (
    <div className="lang-toggle" role="group" aria-label={t('lang.switch')}>
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-toggle__option${lang === code ? ' is-active' : ''}`}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
