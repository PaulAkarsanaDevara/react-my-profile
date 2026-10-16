import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import HTML from '../components/ui/shared/HTML';
import { useI18n } from '../i18n/useI18n';
import { useContent } from '../i18n/useContent';
import QuickFacts from '../components/ui/v1/about/QuickFacts';
import WhatIDo from '../components/ui/v1/about/WhatIDo';
import SkillsTabs from '../components/ui/v1/about/SkillsTabs';
import Journey from '../components/ui/v1/about/Journey';
import SectionHead from '../components/ui/v1/home/SectionHead';
import HomeCta from '../components/ui/v1/home/HomeCta';

const About = () => {
  const { t } = useI18n();
  const { aboutSummary } = useContent();

  return (
    <>
      <HTML
        title="About Me - Farhan"
        description={t('meta.about')}
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <div className="about-container">
        <div className="about-profile-container">
          <MyComponentInstance.ProfileInfo
            image="/images/profile.webp"
            name="Farhan"
            jobs="Full Stack Developer"
          />

          <MyComponentInstance.ProfileInfoAboutMe
            headingName={t('profile.aboutMe')}
            summary={aboutSummary}
          />
        </div>

        <QuickFacts />
        <WhatIDo />
        <SkillsTabs />
        <Journey />

        <section className="about-section">
          <SectionHead title={t('certs.title')} />
          <MyComponentInstance.SertifikasiListItem />
        </section>

        <HomeCta />
      </div>
    </>
  );
};

export default About;
