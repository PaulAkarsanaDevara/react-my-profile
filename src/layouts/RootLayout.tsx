import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { MotionConfig } from 'framer-motion';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import AmbientBackground from '../components/ui/shared/motion/AmbientBackground';
import PageTransition from '../components/ui/shared/motion/PageTransition';
import ScrollProgress from '../components/ui/shared/motion/ScrollProgress';
import MobileTabBar from '../components/ui/shared/navbar/MobileTabBar';
import { useSpotlight } from '../hooks/useSpotlight';
import BackToTop from '../components/ui/shared/motion/BackToTop';
import { useI18n } from '../i18n/useI18n';

const RootLayout: React.FC = () => {
  useSpotlight();
  const { t } = useI18n();

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        {t('skip')}
      </a>
      <AmbientBackground />
      <ScrollProgress />
      <Suspense fallback={null}>
        <MyComponentInstance.TopMenuNavigation />
      </Suspense>

      {/* Rendered Content Start */}
      <main className="main-content" id="main-content" tabIndex={-1}>
        <Container className="main-content-container">
          <PageTransition />
        </Container>
      </main>
      {/* Rendered Content End */}

      <Suspense fallback={null}>
        <MyComponentInstance.BottomNavigation />
      </Suspense>
      <BackToTop />
      <MobileTabBar />
    </MotionConfig>
  );
};

export default RootLayout;
