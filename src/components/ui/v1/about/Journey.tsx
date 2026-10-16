import Reveal from '../../shared/motion/Reveal';
import projects from '../../../../models/Project';
import SectionHead from '../home/SectionHead';

const appsIn2026 = projects.filter((project) =>
  project.startDate.endsWith('2026')
).length;

const milestones = [
  {
    year: '2017',
    title: 'Started vocational school',
    place: 'SMK 10 November · Computer & Network Engineering',
  },
  {
    year: '2020',
    title: 'Began Informatics degree',
    place: 'Universitas Bina Sarana Informatika',
  },
  {
    year: '2022',
    title: 'Full Stack Developer intern',
    place: 'PT Solusi Tiga Selaras',
  },
  {
    year: '2023',
    title: 'Full Stack Developer intern',
    place: 'PT Citi Asia Internasional · MSIB',
  },
  {
    year: '2024',
    title: 'Graduated, joined Alfatih Solusindo Technology',
    place: 'GPA 3.91 · Full Stack Developer',
  },
  {
    year: '2026',
    title: `Built ${appsIn2026} web apps on my own`,
    place: 'React, TypeScript, PWA, Vercel',
  },
];

const Journey = () => (
  <section className="about-section">
    <SectionHead title="My Journey" to="/resume" linkLabel="Lihat resume" />
    <div className="journey">
      {milestones.map((milestone, index) => (
        <Reveal
          key={milestone.year}
          delay={index * 0.06}
          className="journey__entry"
        >
          <div className="journey__item">
            <span className="journey__year">{milestone.year}</span>
            <div className="journey__body">
              <div className="journey__title">{milestone.title}</div>
              <div className="journey__place">{milestone.place}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Journey;
