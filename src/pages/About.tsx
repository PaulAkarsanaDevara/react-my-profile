import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import HTML from '../components/ui/shared/HTML';
import QuickFacts from '../components/ui/v1/about/QuickFacts';
import WhatIDo from '../components/ui/v1/about/WhatIDo';
import SkillsTabs from '../components/ui/v1/about/SkillsTabs';
import Journey from '../components/ui/v1/about/Journey';
import SectionHead from '../components/ui/v1/home/SectionHead';
import HomeCta from '../components/ui/v1/home/HomeCta';
import '../styles/resume.css';

const About = () => {
  return (
    <>
      <HTML
        title="About Me - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <div className="about-container">
        <div className="about-profile-container">
          <MyComponentInstance.ProfileInfo
            image="/images/profile.png"
            name="Farhan"
            jobs="Full Stack Developer"
          />

          <MyComponentInstance.ProfileInfoAboutMe
            headingName="About Me"
            summary="Informatics graduate from Bina Sarana Informatics University with experience in website development, both frontend and backend. During college, I participated in the Merdeka Belajar Kampus Merdeka program and worked as a Full Stack Developer. I have a high enthusiasm for learning new things with high initiative and am able to work independently or in a team."
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
