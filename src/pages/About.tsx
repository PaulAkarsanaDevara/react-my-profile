import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import HTML from '../components/ui/shared/HTML';
import { aboutSummary } from '../models/About';
import QuickFacts from '../components/ui/v1/about/QuickFacts';
import WhatIDo from '../components/ui/v1/about/WhatIDo';
import SkillsTabs from '../components/ui/v1/about/SkillsTabs';
import Journey from '../components/ui/v1/about/Journey';
import SectionHead from '../components/ui/v1/home/SectionHead';
import HomeCta from '../components/ui/v1/home/HomeCta';

const About = () => {
  return (
    <>
      <HTML
        title="About Me - Farhan"
        description="About Farhan: Informatics graduate and Full Stack Developer. Skills, journey and certificates."
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
            headingName="About Me"
            summary={aboutSummary}
          />
        </div>

        <QuickFacts />
        <WhatIDo />
        <SkillsTabs />
        <Journey />

        <section className="about-section">
          <SectionHead title="Certifications & Awards" />
          <MyComponentInstance.SertifikasiListItem />
        </section>

        <HomeCta />
      </div>
    </>
  );
};

export default About;
