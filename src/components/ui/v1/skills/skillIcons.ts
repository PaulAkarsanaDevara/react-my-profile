import { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa';
import {
  SiBootstrap,
  SiCodeigniter,
  SiComposer,
  SiDart,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiNuxtdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiVuedotjs,
} from 'react-icons/si';

type SkillIcon = { Icon: IconType; color: string };

/** Brand colors; `currentColor` follows the theme (for black/white logos). */
const skillIcons: Record<string, SkillIcon> = {
  Typescript: { Icon: SiTypescript, color: '#3178c6' },
  Javascript: { Icon: SiJavascript, color: '#f7df1e' },
  PHP: { Icon: SiPhp, color: '#777bb4' },
  Python: { Icon: SiPython, color: '#3776ab' },
  Java: { Icon: FaJava, color: '#e76f00' },
  Dart: { Icon: SiDart, color: '#0175c2' },
  'React.JS': { Icon: SiReact, color: '#61dafb' },
  'Vue.JS': { Icon: SiVuedotjs, color: '#42b883' },
  Laravel: { Icon: SiLaravel, color: '#ff2d20' },
  Codeigniter: { Icon: SiCodeigniter, color: '#ee4323' },
  Bootstrap: { Icon: SiBootstrap, color: '#7952b3' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06b6d4' },
  Flutter: { Icon: SiFlutter, color: '#02569b' },
  'Next.JS': { Icon: SiNextdotjs, color: 'currentColor' },
  'Nuxt.JS': { Icon: SiNuxtdotjs, color: '#00dc82' },
  'Node JS': { Icon: SiNodedotjs, color: '#339933' },
  'Express JS': { Icon: SiExpress, color: 'currentColor' },
  VSCODE: { Icon: SiVisualstudiocode, color: '#007acc' },
  Github: { Icon: SiGithub, color: 'currentColor' },
  Git: { Icon: SiGit, color: '#f05032' },
  'Node Package Manager': { Icon: SiNpm, color: '#cb3837' },
  Composer: { Icon: SiComposer, color: '#885630' },
};

export default skillIcons;
