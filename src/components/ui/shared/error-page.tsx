import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import AmbientBackground from './motion/AmbientBackground';
import HTML from './HTML';

export default function ErrorPage() {
  const error = useRouteError();
  const notFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div id="error-page" className="error-page">
      <HTML
        title={notFound ? '404 - Farhan' : 'Error - Farhan'}
        description="Halaman tidak ditemukan"
        keywords="Portofolio, Farhan"
      />
      <AmbientBackground />
      <motion.div
        className="error-page__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="error-page__code">{notFound ? '404' : 'Oops!'}</div>
        <h1 className="error-page__title">
          {notFound ? 'Halaman tidak ditemukan' : 'Terjadi kesalahan'}
        </h1>
        <p className="error-page__text">
          {notFound
            ? 'Halaman yang kamu cari tidak ada atau sudah dipindahkan.'
            : 'Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi.'}
        </p>
        <Link to="/" className="resume-btn resume-btn--solid">
          <FaArrowLeft size={13} /> Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
}
