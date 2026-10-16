import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import Reveal from '../../shared/motion/Reveal';

const HomeCta = () => (
  <Reveal>
    <div className="home-cta">
      <h2 className="home-cta__title">Mau ngobrol atau kerja bareng?</h2>
      <p className="home-cta__text">
        Kalau ada proyek atau ide, kirim saja pesannya.
      </p>
      <Link to="/contact" className="resume-btn resume-btn--solid">
        <FaPaperPlane size={13} /> Hubungi Saya
      </Link>
    </div>
  </Reveal>
);

export default HomeCta;
