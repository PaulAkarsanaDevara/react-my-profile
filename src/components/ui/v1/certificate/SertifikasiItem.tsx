import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Certificate = {
  title: string;
  image: string;
};
type Iprops = {
  show: boolean;
  showChange: (value: boolean) => void;
};

type SertifikasiItemProps = Certificate & Iprops;

const SertifikasiItem: React.FC<SertifikasiItemProps> = ({
  title,
  image,
  show,
  showChange,
}) => {
  return (
    <div className="sertifikasi-list__item">
      <LazyLoadImage
        alt={title}
        src={image}
        effect="blur"
        loading="lazy"
        className="sertifikasi-list__item-image"
        onClick={() => showChange(show)}
      />
      <div className="sertifikasi-list__item-caption">{title}</div>
    </div>
  );
};

export default SertifikasiItem;
