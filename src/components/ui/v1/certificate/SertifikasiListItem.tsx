import { useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import certificates from '../../../../models/Certificate';
import SertifikasiItem from './SertifikasiItem';
import { Modal } from 'react-bootstrap';
import PdfPreview from '../../shared/PdfPreview';

const SertifikasiListItem = () => {
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
          {certificates.length} certificates · klik untuk melihat
        </span>
        <div className="sertifikasi-toolbar__arrows">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => scrollList(-1)}
            aria-label="Sebelumnya"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => scrollList(1)}
            aria-label="Berikutnya"
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
            Sertifikasi & Penghargaan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PdfPreview fileUrl={getSertifikasiPrev?.pdfPreview} scale={1.0} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SertifikasiListItem;
