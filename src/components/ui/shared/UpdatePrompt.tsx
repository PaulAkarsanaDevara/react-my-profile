import { useRegisterSW } from 'virtual:pwa-register/react';
import { useI18n } from '../../../i18n/useI18n';

/** Asks before swapping in a new service worker, so open tabs never lose their chunks mid-session. */
const UpdatePrompt = () => {
  const { t } = useI18n();
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div className="update-toast" role="status">
      <span>{t('update.text')}</span>
      <button type="button" onClick={() => updateServiceWorker(true)}>
        {t('update.action')}
      </button>
      <button
        type="button"
        className="update-toast__dismiss"
        onClick={() => setNeedRefresh(false)}
      >
        {t('update.dismiss')}
      </button>
    </div>
  );
};

export default UpdatePrompt;
