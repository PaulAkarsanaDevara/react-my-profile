import HTML from '../components/ui/shared/HTML';
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
        description="Portfolio of Farhan, a Full Stack Developer: projects, experience, skills and certifications across frontend, backend and DevOps."
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
          summary="Informatics graduate from Bina Sarana Informatics University with experience in website development, both frontend and backend. During college, I participated in the Merdeka Belajar Kampus Merdeka program and worked as a Full Stack Developer. I have a high enthusiasm for learning new things with high initiative and am able to work independently or in a team."
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
