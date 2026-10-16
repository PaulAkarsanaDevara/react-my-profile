import HTML from '../components/ui/shared/HTML';
import { useI18n } from '../i18n/useI18n';
import { useContent } from '../i18n/useContent';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import HomeStats from '../components/ui/v1/home/HomeStats';
import TechMarquee from '../components/ui/v1/home/TechMarquee';
import FeaturedProjects from '../components/ui/v1/home/FeaturedProjects';
import RecentExperience from '../components/ui/v1/home/RecentExperience';
import HomeCta from '../components/ui/v1/home/HomeCta';

const Home = () => {
  const { t } = useI18n();
  const { aboutSummary } = useContent();

  return (
    <>
      <HTML
        title="Home - Farhan"
        description={t('meta.home')}
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <section className="home-container">
        <MyComponentInstance.ProfileInfo
          image="/images/profile.webp"
          name="Farhan"
          jobs="Full Stack Developer"
        />

        <MyComponentInstance.ProfileInfoAboutMe
          headingName={t('profile.aboutMe')}
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
