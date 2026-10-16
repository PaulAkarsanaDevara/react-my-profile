import * as React from 'react';
import { Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

/** Makes the SweetAlert popup follow the active light/dark theme. */
const swalTheme = () => {
  const styles = getComputedStyle(document.documentElement);
  return {
    background: styles.getPropertyValue('--bg-elevated').trim(),
    color: styles.getPropertyValue('--text').trim(),
    confirmButtonColor: styles.getPropertyValue('--accent').trim(),
  };
};

const ContactFormInput: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const emailJsUserId: string = import.meta.env.VITE_EMAILJS_USER_ID;
    const emailJsServiceId: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailJsTemplateId: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const { name, email, message } = data;
    const emailInputData = {
      name,
      to_name: 'Farhan',
      from_name: name,
      email,
      message,
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
      reset(); // Mereset form setelah submit berhasil

      Swal.fire({
        title: 'Berhasil',
        text: 'Pesan anda sudah dikirimkan',
        icon: 'success',
        ...swalTheme(),
      });
    } catch (err) {
      console.error({
        message_success: `Email Gagal dikirimkan: ${err}`,
      });
      Swal.fire({
        title: 'Gagal!',
        text: 'Pesan anda tidak dapat dikirimkan',
        icon: 'error',
        ...swalTheme(),
      });
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="contact-forminput-container"
      noValidate
    >
      <Form.Group className="contact-forminput-group" controlId="contact-name">
        <Form.Label className="contact-forminput-group__label">Nama</Form.Label>
        <Form.Control
          className="contact-forminput-group__input"
          type="text"
          placeholder="Nama lengkap"
          autoComplete="name"
          {...register('name', { required: true })}
          aria-invalid={errors.name ? 'true' : 'false'}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          Bidang ini tidak boleh kosong
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="contact-forminput-group" controlId="contact-email">
        <Form.Label className="contact-forminput-group__label">Email</Form.Label>
        <Form.Control
          className="contact-forminput-group__input"
          type="email"
          placeholder="nama@email.com"
          autoComplete="email"
          {...register('email', {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.type === 'pattern'
            ? 'Format email tidak valid'
            : 'Bidang ini tidak boleh kosong'}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group
        className="contact-forminput-group"
        controlId="contact-message"
      >
        <Form.Label className="contact-forminput-group__label">Pesan</Form.Label>
        <Form.Control
          className="contact-forminput-group__textarea"
          as="textarea"
          placeholder="Tuliskan pesan"
          {...register('message', { required: true })}
          aria-invalid={errors.message ? 'true' : 'false'}
          isInvalid={!!errors.message}
        />
        <Form.Control.Feedback type="invalid">
          Bidang ini tidak boleh kosong
        </Form.Control.Feedback>
      </Form.Group>

      <button
        type="submit"
        disabled={isSubmitting}
        className="contact-forminput-button"
      >
        <FaPaperPlane size={14} />
        {isSubmitting ? 'Mengirim...' : 'Kirimkan'}
      </button>
    </Form>
  );
};

export default ContactFormInput;
