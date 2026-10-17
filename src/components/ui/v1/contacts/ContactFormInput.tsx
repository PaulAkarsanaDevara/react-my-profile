import * as React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheck, FaPaperPlane } from 'react-icons/fa';
import { FiAlertCircle, FiMail, FiMessageSquare, FiUser } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import { useI18n } from '../../../../i18n/useI18n';

interface IFormInput {
  name: string;
  email: string;
  message: string;
  /** Honeypot: real visitors never see or fill this field. */
  website: string;
}

const TOPICS = ['project', 'work', 'question', 'other'] as const;
const MAX_MESSAGE = 1000;

type Status = 'idle' | 'sent' | 'error';

const ContactFormInput: React.FC = () => {
  const { t } = useI18n();
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>(TOPICS[0]);
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IFormInput>();

  const messageLength = watch('message')?.length ?? 0;

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // Bots fill the hidden field: pretend success and send nothing.
    if (data.website) {
      setStatus('sent');
      return;
    }

    const emailJsUserId: string = import.meta.env.VITE_EMAILJS_USER_ID;
    const emailJsServiceId: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailJsTemplateId: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const { name, email, message } = data;
    const topicLabel = t(`contact.topic.${topic}`);
    const emailInputData = {
      name,
      to_name: 'Farhan',
      from_name: name,
      email,
      topic: topicLabel,
      message: `[${topicLabel}] ${message}`,
    };

    try {
      const response = await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        emailInputData,
        emailJsUserId
      );
      console.log({
        message_success: `Email Berhasil dikirimkan: ${response.status} ${response.text}`,
      });
      setStatus('sent');
    } catch (err) {
      console.error({
        message_success: `Email Gagal dikirimkan: ${err}`,
      });
      setStatus('error');
    }
  };

  const sendAnother = () => {
    reset();
    setTopic(TOPICS[0]);
    setStatus('idle');
  };

  const submitOnShortcut = (event: React.KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'sent' ? (
        <motion.div
          key="sent"
          className="contact-success"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="status"
        >
          <motion.span
            className="contact-success__icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
          >
            <FaCheck size={26} />
          </motion.span>
          <h3 className="contact-success__title">{t('contact.sentTitle')}</h3>
          <p className="contact-success__text">
            {t('contact.sentText')}
          </p>
          <button
            type="button"
            className="resume-btn resume-btn--ghost"
            onClick={sendAnother}
          >
            {t('contact.sendAnother')}
          </button>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-forminput-container"
            noValidate
          >
            <div className="contact-topic">
              <div className="contact-forminput-group__label">{t('contact.topic')}</div>
              <div className="contact-topic__chips" role="radiogroup" aria-label={t('contact.topicAria')}>
                {TOPICS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    role="radio"
                    aria-checked={topic === item}
                    className={`contact-topic__chip${topic === item ? ' is-active' : ''}`}
                    onClick={() => setTopic(item)}
                  >
                    {t(`contact.topic.${item}`)}
                  </button>
                ))}
              </div>
            </div>

            <Form.Group className="contact-forminput-group" controlId="contact-name">
              <Form.Label className="contact-forminput-group__label">{t('contact.name')}</Form.Label>
              <div className="contact-field">
                <FiUser className="contact-field__icon" size={17} aria-hidden />
                <Form.Control
                  className="contact-forminput-group__input"
                  type="text"
                  placeholder={t('contact.namePlaceholder')}
                  autoComplete="name"
                  {...register('name', { required: true })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  isInvalid={!!errors.name}
                />
              </div>
              <Form.Control.Feedback type="invalid" className={errors.name ? 'd-block' : ''}>
                {errors.name && t('contact.required')}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="contact-forminput-group" controlId="contact-email">
              <Form.Label className="contact-forminput-group__label">Email</Form.Label>
              <div className="contact-field">
                <FiMail className="contact-field__icon" size={17} aria-hidden />
                <Form.Control
                  className="contact-forminput-group__input"
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  autoComplete="email"
                  {...register('email', {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  isInvalid={!!errors.email}
                />
              </div>
              <Form.Control.Feedback type="invalid" className={errors.email ? 'd-block' : ''}>
                {errors.email &&
                  (errors.email.type === 'pattern'
                    ? t('contact.emailInvalid')
                    : t('contact.required'))}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="contact-forminput-group" controlId="contact-message">
              <Form.Label className="contact-forminput-group__label">{t('contact.message')}</Form.Label>
              <div className="contact-field contact-field--textarea">
                <FiMessageSquare className="contact-field__icon" size={17} aria-hidden />
                <Form.Control
                  className="contact-forminput-group__textarea"
                  as="textarea"
                  placeholder={t('contact.messagePlaceholder')}
                  onKeyDown={submitOnShortcut}
                  {...register('message', {
                    required: true,
                    minLength: 10,
                    maxLength: MAX_MESSAGE,
                  })}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  isInvalid={!!errors.message}
                />
              </div>
              <div className="contact-meta">
                <Form.Control.Feedback type="invalid" className={`m-0 ${errors.message ? 'd-block' : ''}`}>
                  {errors.message &&
                    (errors.message.type === 'minLength'
                      ? t('contact.tooShort')
                      : errors.message.type === 'maxLength'
                        ? t('contact.tooLong', { max: MAX_MESSAGE })
                        : t('contact.required'))}
                </Form.Control.Feedback>
                {!errors.message && (
                  <span className="contact-meta__hint">{t('contact.shortcut')}</span>
                )}
                <span
                  className={`contact-meta__count${messageLength > MAX_MESSAGE ? ' is-over' : ''}`}
                >
                  {messageLength}/{MAX_MESSAGE}
                </span>
              </div>
            </Form.Group>

            {/* Honeypot — hidden from people and assistive tech. */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="contact-honeypot"
              {...register('website')}
            />

            {status === 'error' && (
              <div className="contact-error" role="alert">
                <FiAlertCircle size={18} />
                <span>
                  {t('contact.error')}
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="contact-forminput-button"
            >
              <FaPaperPlane size={14} />
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </button>
          </Form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormInput;
