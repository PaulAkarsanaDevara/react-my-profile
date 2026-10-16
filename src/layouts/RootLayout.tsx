import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { MotionConfig } from 'framer-motion';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import AmbientBackground from '../components/ui/shared/motion/AmbientBackground';
import PageTransition from '../components/ui/shared/motion/PageTransition';
import ScrollProgress from '../components/ui/shared/motion/ScrollProgress';
import MobileTabBar from '../components/ui/shared/navbar/MobileTabBar';

const RootLayout: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user">
      <AmbientBackground />
      <ScrollProgress />
      <Suspense fallback={null}>
        <MyComponentInstance.TopMenuNavigation />
      </Suspense>

      {/* Rendered Content Start */}
      <main className="main-content">
        <Container className="main-content-container">
          <PageTransition />
        </Container>
      </main>
      {/* Rendered Content End */}

      <Suspense fallback={null}>
        <MyComponentInstance.BottomNavigation />
      </Suspense>
      <MobileTabBar />
    </MotionConfig>
  );
};

export default RootLayout;
