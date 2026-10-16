import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import Reveal from '../../shared/motion/Reveal';

const HomeCta = () => (
  <Reveal>
    <div className="home-cta">
      <h2 className="home-cta__title">Let&apos;s work together</h2>
      <p className="home-cta__text">
        Punya proyek atau ide yang ingin diwujudkan? Kirim pesan dan kita
        diskusikan.
      </p>
      <Link to="/contact" className="resume-btn resume-btn--solid">
        <FaPaperPlane size={13} /> Hubungi Saya
      </Link>
    </div>
  </Reveal>
);

export default HomeCta;
