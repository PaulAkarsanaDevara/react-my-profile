/** Suspense fallback so a slow lazy chunk never leaves the screen empty. */
const PageLoader = () => (
  <div className="page-loader" role="status" aria-live="polite">
    <div className="page-loader__spinner" />
  </div>
);

export default PageLoader;
