interface Certificate {
  idSertifikat: string;
  title: string;
  image: string;
  link: string | null;
  startDate: string;
  endDate: string;
  pdfPreview: string | undefined;
}

interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  links: string;
  type: string;
  coverImage: string;
  insertDate: string;
  /** Technologies used; names match skillIcons / techIcons keys. */
  tech?: string[];
  /** Source code URL, when `links` points to a live demo. */
  repo?: string;
  /** Show the "Lihat Kode" button for `repo`. Only set once the repo is public, otherwise visitors get a 404. */
  repoPublic?: boolean;
}

interface Education {
  campus: string;
  studyName: string;
  startDate: string;
  endDate: string;
  description: string;
  ipk: number | string;
}

interface Experience {
  company: string;
  job: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface MenuItem {
  name: string;
  links: string;
}

interface Skills {
  title: string;
  description: string;
  image: string;
  category?: string;
}
