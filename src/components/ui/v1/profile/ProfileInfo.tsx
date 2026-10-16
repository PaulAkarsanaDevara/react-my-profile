/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaCode, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ButtonSocial from '../../shared/button/ButtonSocial';
import Typewriter from '../../shared/motion/Typewriter';
import { useTilt } from '../../../../hooks/useTilt';

type IProps = { image: string; name: string; jobs: string };

interface SocialIcon {
  title: string;
  links: string;
  icons: any;
}

const socialIcons: SocialIcon[] = [
  {
    title: 'Github',
    links: 'https://github.com/FarhannDev',
    icons: <FaGithub fontSize={22} />,
  },
  {
    title: 'Linkedln',
    links: 'https://linkedin.com/in/farhan18',
    icons: <FaLinkedin fontSize={22} />,
  },
  {
    title: 'Dicoding',
    links: 'https://www.dicoding.com/users/farhannn18/academies',
    icons: <FaCode fontSize={22} />,
  },

  {
    title: 'Whats App',
    links:
      'https://api.whatsapp.com/send/?phone=6282298717364&text&type=phone_number&app_absent=0',
    icons: <FaWhatsapp fontSize={22} />,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ProfileInfo: React.FC<IProps> = ({ name, image, jobs }) => {
  const tilt = useTilt(12);

  return (
    <>
      <div className="profile-info w-100 d-flex justify-content-center align-items-center g-3">
        <motion.div
          className="profile-info-bio "
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="profile-info-bio__avatar"
            variants={{
              hidden: { opacity: 0, scale: 0.7 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', stiffness: 160, damping: 16 },
              },
            }}
            whileHover={{ scale: 1.04 }}
            style={tilt.style}
            onPointerMove={tilt.onPointerMove}
            onPointerLeave={tilt.onPointerLeave}
          >
            <LazyLoadImage
              alt={name}
              src={image}
              effect="blur"
              loading="lazy"
              className="img-fluid profile-info-bio__image "
            />
          </motion.div>

          <motion.div variants={item} className="profile-info-bio__name">
            {name}
          </motion.div>
          <motion.div variants={item} className="profile-info-bio__jobs">
            <Typewriter words={[jobs, 'Frontend Developer', 'Backend Developer', 'DevOps Enthusiast']} />
          </motion.div>
          <motion.div variants={item} className="profile-info-bio__social">
            {socialIcons?.map((social, index) => (
              <ButtonSocial
                key={+index}
                title={social?.title}
                links={social?.links}
                icons={social?.icons}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ProfileInfo;
