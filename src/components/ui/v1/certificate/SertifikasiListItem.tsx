import { Suspense, lazy, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { activeCertificates as certificates } from '../../../../models/Certificate';
import SertifikasiItem from './SertifikasiItem';
import { Modal } from 'react-bootstrap';
import { useI18n } from '../../../../i18n/useI18n';
const PdfPreview = lazy(() => import('../../shared/PdfPreview'));

const SertifikasiListItem = () => {
  const { t } = useI18n();
  const [show, setShow] = useState(false);
  const [sertifikasi, setSertifikasi] = useState<string>('');
  const listRef = useRef<HTMLDivElement>(null);

  const handleClose = () => setShow(false);

  const handleShow = (sertifikasiId: string) => {
    setShow(true);
    setSertifikasi(sertifikasiId);
  };

  const scrollList = (direction: 1 | -1) => {
    const list = listRef.current;
    if (!list) return;
    list.scrollBy({ left: direction * (list.clientWidth * 0.8), behavior: 'smooth' });
  };

  const getSertifikasiPrev = certificates?.find(
    (certificate) => certificate.idSertifikat == sertifikasi
  );

  return (
    <>
      <div className="sertifikasi-toolbar">
        <span className="sertifikasi-toolbar__count">
          {t('certs.count', { n: certificates.length })}
        </span>
        <div className="sertifikasi-toolbar__arrows">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => scrollList(-1)}
            aria-label={t('certs.prev')}
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => scrollList(1)}
            aria-label={t('certs.next')}
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="sertifikasi-list" ref={listRef}>
        {certificates.map((certificate, index) => (
          <SertifikasiItem
            key={index}
            {...certificate}
            show={show}
            showChange={() => handleShow(certificate.idSertifikat)}
          />
        ))}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        scrollable
        data-bs-theme="dark"
        fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-white fs-5 fw-normal">
            {t('certs.title')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Suspense fallback={<div className="resume-online-loading">{t('common.loading')}</div>}>
            {getSertifikasiPrev && !getSertifikasiPrev.pdfPreview ? (
              <img
                src={getSertifikasiPrev.image}
                alt={getSertifikasiPrev.title}
                className="sertifikasi-modal-image"
              />
            ) : (
              <PdfPreview fileUrl={getSertifikasiPrev?.pdfPreview} scale={1.0} />
            )}
          </Suspense>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SertifikasiListItem;
