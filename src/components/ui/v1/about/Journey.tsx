import Reveal from '../../shared/motion/Reveal';
import SectionHead from '../home/SectionHead';

const milestones = [
  {
    year: '2017',
    title: 'Started vocational school',
    place: 'SMK 10 November · Computer & Network Engineering',
  },
  {
    year: '2018',
    title: 'Digital Marketing Intern',
    place: 'PT Bipie',
  },
  {
    year: '2020',
    title: 'Began Informatics degree',
    place: 'Universitas Bina Sarana Informatika',
  },
  {
    year: '2022',
    title: 'DevOps workshop volunteer & Laravel intern',
    place: 'Kubernetes (K8s) · PT Solusi Tiga Selaras',
  },
  {
    year: '2023',
    title: 'Full Stack Developer intern',
    place: 'PT Citi Asia Internasional · MSIB',
  },
  {
    year: '2024',
    title: 'Graduated & Web Developer',
    place: 'GPA 3.91 · PT Winni Code Garuda Indonesia',
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
