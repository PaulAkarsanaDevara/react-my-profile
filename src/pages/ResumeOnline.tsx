import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import HTML from '../components/ui/shared/HTML';
import Reveal from '../components/ui/shared/motion/Reveal';

const PdfPreview = lazy(() => import('../components/ui/shared/PdfPreview'));

const CV_URL = '/uploads/CV FARHAN EN.pdf';

const ResumeOnline = () => {
  return (
    <>
      <HTML
        title="Online Resume - Farhan"
        description="Read and download the online resume (CV) of Farhan, Full Stack Developer."
        keywords="Resume, CV, Farhan, Farhan Portofolio"
      />
      <div className="resume-online-container">
        <Link to="/resume" className="detail-back">
          <FaArrowLeft size={12} /> Kembali ke Resume
        </Link>

        <div className="resume-header">
          <MyComponentInstance.Heading title="Online Resume" />
          <div className="resume-header__actions">
            <Link
              to={CV_URL}
              target="_blank"
              download
              className="resume-btn resume-btn--solid"
            >
              <FaDownload size={13} /> Download CV
            </Link>
          </div>
        </div>

        <Reveal>
          <div className="resume-online-frame">
            <Suspense fallback={<div className="resume-online-loading">Memuat dokumen...</div>}>
              <PdfPreview fileUrl={CV_URL} scale={1.5} />
            </Suspense>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default ResumeOnline;
