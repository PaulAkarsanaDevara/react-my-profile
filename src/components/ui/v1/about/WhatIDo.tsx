import { IconType } from 'react-icons';
import {
  SiDocker,
  SiGo,
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
  SiPostgresql,
  SiCodeigniter,
} from 'react-icons/si';
import { FaCode, FaServer, FaCogs } from 'react-icons/fa';
import Reveal from '../../shared/motion/Reveal';
import SectionHead from '../home/SectionHead';
import { useI18n } from '../../../../i18n/useI18n';
import type { Key } from '../../../../i18n/locales/en';

type Service = {
  icon: JSX.Element;
  title: string;
  text: Key;
  tech: { name: string; Icon: IconType }[];
};

const services: Service[] = [
  {
    icon: <FaCode size={20} />,
    title: 'Frontend',
    text: 'whatIDo.frontend',
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
    text: 'whatIDo.backend',
    tech: [
      { name: 'Laravel', Icon: SiLaravel },
      { name: 'Go', Icon: SiGo },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'CodeIgniter', Icon: SiCodeigniter },
    ],
  },
  {
    icon: <FaCogs size={19} />,
    title: 'DevOps',
    text: 'whatIDo.devops',
    tech: [
      { name: 'Docker', Icon: SiDocker },
      { name: 'Kubernetes', Icon: SiKubernetes },
      { name: 'Jenkins', Icon: SiJenkins },
      { name: 'Linux', Icon: SiLinux },
    ],
  },
];

const WhatIDo = () => {
  const { t } = useI18n();

  return (
  <section className="about-section">
    <SectionHead title={t('whatIDo.title')} />
    <div className="service-grid">
      {services.map((service, index) => (
        <Reveal key={service.title} delay={index * 0.1} className="service-cell">
          <div className="service-card">
            <span className="service-card__icon">{service.icon}</span>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__text">{t(service.text)}</p>
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
};

export default WhatIDo;
