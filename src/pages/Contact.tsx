import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiCheck, FiCopy } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import ContactFormInput from '../components/ui/v1/contacts/ContactFormInput';
import HTML from '../components/ui/shared/HTML';
import { useI18n } from '../i18n/useI18n';
import type { Key } from '../i18n/locales/en';

const channels = [
  {
    title: 'WhatsApp',
    detail: '',
    detailKey: 'contact.whatsapp' as Key,
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

type Channel = (typeof channels)[number];

const ChannelCard: React.FC<{ channel: Channel; index: number }> = ({
  channel,
  index,
}) => {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(channel.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable (insecure context / denied) */
    }
  };

  return (
    <motion.div
      className="contact-channel"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
    >
      <a
        href={channel.href}
        target="_blank"
        rel="noreferrer"
        className="contact-channel__link"
      >
        <span className="contact-channel__icon">{channel.icon}</span>
        <span>
          <span className="contact-channel__title">{channel.title}</span>
          <span className="contact-channel__detail">
            {channel.detailKey ? t(channel.detailKey) : channel.detail}
          </span>
        </span>
      </a>
      <button
        type="button"
        className="contact-channel__copy"
        onClick={copyLink}
        aria-label={t('contact.copyAria', { title: channel.title })}
        title={copied ? t('contact.copied') : t('contact.copy')}
      >
        {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
      </button>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const { t } = useI18n();

  return (
    <>
      <HTML
        title="Contact - Farhan"
        description={t('meta.contact')}
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <div className="contacts-container">
        <MyComponentInstance.Heading title={t('contact.heading')} />
        <hr className="text-secondary" />

        <div className="contact-layout">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="contact-info__title">{t('contact.title')}</h2>
            <p className="contact-info__lead">
              {t('contact.lead')}
            </p>

            <div className="contact-info__channels">
              {channels.map((channel, index) => (
                <ChannelCard key={channel.title} channel={channel} index={index} />
              ))}
            </div>

            <p className="contact-info__note">
              {t('contact.note')}
            </p>
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
