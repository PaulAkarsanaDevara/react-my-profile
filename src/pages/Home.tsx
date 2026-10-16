import HTML from '../components/ui/shared/HTML';
import { aboutSummary } from '../models/About';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import HomeStats from '../components/ui/v1/home/HomeStats';
import TechMarquee from '../components/ui/v1/home/TechMarquee';
import FeaturedProjects from '../components/ui/v1/home/FeaturedProjects';
import RecentExperience from '../components/ui/v1/home/RecentExperience';
import HomeCta from '../components/ui/v1/home/HomeCta';

const Home = () => {
  return (
    <>
      <HTML
        title="Home - Farhan"
        description="Farhan's portfolio: web apps, work experience, skills and certificates."
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <section className="home-container">
        <MyComponentInstance.ProfileInfo
          image="/images/profile.webp"
          name="Farhan"
          jobs="Full Stack Developer"
        />

        <MyComponentInstance.ProfileInfoAboutMe
          headingName="About Me"
          summary={aboutSummary}
        />
      </section>

      <HomeStats />
      <TechMarquee />
      <FeaturedProjects />
      <RecentExperience />
      <HomeCta />
    </>
  );
};

export default Home;
