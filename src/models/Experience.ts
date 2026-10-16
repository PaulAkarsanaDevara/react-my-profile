const experience: Experience[] = [
  {
    company: 'Alfatih Solusindo Technology',
    job: 'Full Stack Developer',
    location: 'Karawang, Jawa Barat, Indonesia',
    startDate: 'Oct 2024',
    endDate: 'Present',
    description: `I work on a hospital information system (SIMRS) built with Laravel and Blade, in a big team with a shared codebase. I do both backend and frontend. Most tasks come as tickets, so a lot of my time goes to fixing bugs, and the rest to building new features.
- Reports module: built the admission, bed availability and appointment reports (visit registers, census, patient mutation, new vs returning patients, waiting lists) and the shared layer behind the module. Each report is backed by an SQL view with its own migration and menu entry, with date and unit filters, an on-screen preview and Excel export.
- General report: tuned a slow configurable report query from about 100 seconds down to under a second.
- National regulatory (RL) forms: created most of the data models and SQL functions for around 28 RL report forms (inpatient and outpatient activity, laboratory, radiology, pharmacy, disease statistics), building on the first two started by a colleague.
- Report builder and exports: built a report builder (report types and access) and fixed Excel exports that would not open in newer Excel, across inventory, billing and pharmacy reports.
- Laboratory integration: built a pluggable framework that pulls results from external lab information systems and analyzers into the system. Integrated LIS Wynacom, LIS Sysmex, LIS BBM, LIS Mlabs, LIS Vanslab and LIS Medisynclab, with scheduled auto-sync, a sync-state table and a monitoring screen. Also fixed duplicate results coming from the analyzer sync.
- Radiology integration: integrated Medipacs/Orthanc and PACS Thena. Built the layer that links imaging studies to orders by accession number, using webhooks and scheduled sync, with safe fallback matching when numbers are missing. Added order logs and monitoring for it, and extended the HL7 worklist integration the team already had.
- Pharmacy: prescription validation, final and outpatient prescriptions, invoices, and print layouts.
- Security: added forced password change on first login and a limit on active sessions per user.
- Wrote automated tests for some lab, radiology and invoice features.`,
  },
  {
    company: 'PT Winni Code Garuda Indonesia',
    job: 'Full Stack Developer',
    location: 'Bandung, Jawa Barat, Indonesia',
    startDate: 'Aug 2024',
    endDate: 'Okt 2024',
    description: `Create a proposal for designing an integrated e-system based on a website and explain the
background of the project, the reasons for taking on the project, and determine the timeline
for completing the project.`,
  },
  {
    company: 'PT Citi Asia Internasional',
    job: 'Full Stack Developer',
    location: 'Jakarta Selatan, Jakarta Raya, Indonesia',
    startDate: 'Aug 2023',
    endDate: 'Des 2023',
    description: `During my internship as a Full Stack Developer I was assigned to determine the structure of web pages and convert website designs into front-end code to share features on web pages, 
Directly involved in organizing, directing and implementing projects according to the planned schedule, documenting applications that have been developed and collaborating with the Project Management Team, System Analysts, Designers and UI/UX Developers in web application development.`,
  },
  {
    company: 'PT Solusi Tiga Selaras',
    job: 'Full Stack Developer',
    location: 'Jakarta Selatan, Jakarta Raya, Indonesia',
    startDate: 'Aug 2022',
    endDate: 'Des 2022',
    description: `During my internship as a Full Stack Developer, I was assigned to create an internal web application call using Javascript and PHP framework Laravel, implement database design using the PHP Artisan Console feature in the Laravel framework, fix bugs in application development, document applications that have been developed, and collaborate with Project Management Team, Developers and QA team during web application development.`,
  },
];

export { experience };
