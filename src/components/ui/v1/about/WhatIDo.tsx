import { IconType } from 'react-icons';
import {
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
  SiMysql,
  SiCodeigniter,
} from 'react-icons/si';
import { FaCode, FaServer, FaCogs } from 'react-icons/fa';
import Reveal from '../../shared/motion/Reveal';
import SectionHead from '../home/SectionHead';

type Service = {
  icon: JSX.Element;
  title: string;
  text: string;
  tech: { name: string; Icon: IconType }[];
};

const services: Service[] = [
  {
    icon: <FaCode size={20} />,
    title: 'Frontend',
    text: 'Responsive, accessible interfaces built with modern component-based frameworks.',
    tech: [
      { name: 'React', Icon: SiReact },
      { name: 'Vue', Icon: SiVuedotjs },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Tailwind', Icon: SiTailwindcss },
    ],
  },
  {
    icon: <FaServer size={19} />,
    title: 'Backend',
    text: 'Web applications and APIs with solid database design and clean architecture.',
    tech: [
      { name: 'Laravel', Icon: SiLaravel },
      { name: 'CodeIgniter', Icon: SiCodeigniter },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'MySQL', Icon: SiMysql },
    ],
  },
  {
    icon: <FaCogs size={19} />,
    title: 'DevOps',
    text: 'Containerised deployments and CI/CD pipelines to ship changes reliably.',
    tech: [
      { name: 'Docker', Icon: SiDocker },
      { name: 'Kubernetes', Icon: SiKubernetes },
      { name: 'Jenkins', Icon: SiJenkins },
      { name: 'Linux', Icon: SiLinux },
    ],
  },
];

const WhatIDo = () => (
  <section className="about-section">
    <SectionHead title="What I Do" />
    <div className="service-grid">
      {services.map((service, index) => (
        <Reveal key={service.title} delay={index * 0.1} className="service-cell">
          <div className="service-card">
            <span className="service-card__icon">{service.icon}</span>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__text">{service.text}</p>
            <ul className="service-card__tech">
              {service.tech.map(({ name, Icon }) => (
                <li key={name}>
                  <Icon size={14} /> {name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default WhatIDo;
