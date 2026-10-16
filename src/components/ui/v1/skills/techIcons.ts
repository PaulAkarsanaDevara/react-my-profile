import { IconType } from 'react-icons';
import {
  SiDocker,
  SiGnubash,
  SiGrafana,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiPrometheus,
  SiPwa,
  SiRedux,
  SiTestinglibrary,
  SiThemoviedatabase,
} from 'react-icons/si';
import skillIcons from './skillIcons';

type TechIcon = { Icon: IconType; color: string };

/**
 * Icons for project technologies: everything in skillIcons plus tools that
 * only show up in projects. Names without an icon render as plain text chips.
 */
const techIcons: Record<string, TechIcon> = {
  ...skillIcons,
  Docker: { Icon: SiDocker, color: '#2496ed' },
  'Docker Compose': { Icon: SiDocker, color: '#2496ed' },
  Kubernetes: { Icon: SiKubernetes, color: '#326ce5' },
  Jenkins: { Icon: SiJenkins, color: '#d24939' },
  Linux: { Icon: SiLinux, color: '#fcc624' },
  Redux: { Icon: SiRedux, color: '#764abc' },
  PWA: { Icon: SiPwa, color: '#5a0fc8' },
  Prometheus: { Icon: SiPrometheus, color: '#e6522c' },
  Grafana: { Icon: SiGrafana, color: '#f46800' },
  'Shell Script': { Icon: SiGnubash, color: '#4eaa25' },
  'TMDB API': { Icon: SiThemoviedatabase, color: '#01b4e4' },
  Testing: { Icon: SiTestinglibrary, color: '#e33332' },
};

export default techIcons;
