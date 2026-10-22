import { Component, ErrorInfo, ReactNode } from 'react';
import { useI18n } from '../../../i18n/useI18n';

const ErrorFallback = () => {
  const { t } = useI18n();

  return (
    <div className="page-error" role="alert">
      <h1 className="error-page__title">{t('error.title')}</h1>
      <p className="error-page__text">{t('error.text')}</p>
      <button
        type="button"
        className="resume-btn resume-btn--solid"
        onClick={() => window.location.reload()}
      >
        {t('error.reload')}
      </button>
    </div>
  );
};

type State = { failed: boolean };

/** Catches render and lazy-chunk errors so a failure shows a reload prompt, not a blank page. */
class PageErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    return this.state.failed ? <ErrorFallback /> : this.props.children;
  }
}

export default PageErrorBoundary;
