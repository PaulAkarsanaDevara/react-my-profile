import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import ContactFormInput from '../components/ui/v1/contacts/ContactFormInput';
import HTML from '../components/ui/shared/HTML';

const channels = [
  {
    title: 'WhatsApp',
    detail: 'Chat langsung',
    href: 'https://api.whatsapp.com/send/?phone=6282298717364&text&type=phone_number&app_absent=0',
    icon: <FaWhatsapp size={20} />,
  },
  {
    title: 'LinkedIn',
    detail: 'linkedin.com/in/farhan18',
    href: 'https://linkedin.com/in/farhan18',
    icon: <FaLinkedin size={20} />,
  },
  {
    title: 'GitHub',
    detail: 'github.com/FarhannDev',
    href: 'https://github.com/FarhannDev',
    icon: <FaGithub size={20} />,
  },
];

const Contact: React.FC = () => {
  return (
    <>
      <HTML
        title="Contact  - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <div className="contacts-container">
        <MyComponentInstance.Heading title="Contact Me" />
        <hr className="text-secondary" />

        <div className="contact-layout">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="contact-info__title">Let&apos;s work together</h2>
            <p className="contact-info__lead">
              Punya proyek, pertanyaan, atau sekadar ingin menyapa? Kirim pesan
              lewat form atau hubungi saya lewat kanal di bawah ini.
            </p>

            <div className="contact-info__channels">
              {channels.map((channel, index) => (
                <motion.a
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-channel"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
                >
                  <span className="contact-channel__icon">{channel.icon}</span>
                  <span>
                    <span className="contact-channel__title">
                      {channel.title}
                    </span>
                    <span className="contact-channel__detail">
                      {channel.detail}
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactFormInput />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
