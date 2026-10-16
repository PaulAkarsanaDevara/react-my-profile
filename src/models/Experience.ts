const experience: Experience[] = [
  {
    company: 'Alfatih Solusindo Technology',
    job: 'Full Stack Developer',
    location: 'Karawang, Jawa Barat, Indonesia',
    startDate: 'Oct 2024',
    endDate: 'Present',
    description: `I work on a hospital information system (SIMRS) used by multiple hospitals, built with Laravel and Blade in a large team with a shared codebase. I work across the stack, from database migrations, SQL views and controllers to screens, print layouts and Excel and PDF exports. Most of my work comes from tickets, both new features and fixes.
- Reports module: built the admission, bed availability and appointment reports (visit registers, census, patient mutation, new vs returning patients, waiting lists) and the shared layer behind the module. Each report is backed by an SQL view with its own migration and menu entry, with date and unit filters, an on-screen preview and Excel export.
- General report: tuned a slow configurable report query from about 100 seconds down to under a second.
- National regulatory (RL) forms: created most of the data models and SQL functions for around 28 RL report forms (inpatient and outpatient activity, laboratory, radiology, pharmacy, disease statistics), building on the first two started by a colleague.
- Report builder and exports: built a report builder (report types and access) and fixed Excel exports that would not open in newer Excel, across inventory, billing and pharmacy reports.
- Laboratory integrations: six lab systems
  - Connected the hospital system to Wynacom, Sysmex, BBM, Mlabs, Vanslab and Medisynclab, so lab orders reach the lab system and results come back.
  - Each lab has its own way of talking, so the bridges are small Go services. Built the Medisynclab one from scratch, built the Mlabs API integration, and worked on the others. They retry failed sends, renew expired login tokens, and have screens to monitor orders.
  - Before, lab results only reached the hospital system when someone opened the result print screen. Built a background worker that fetches results every 5 minutes for BBM, Sysmex, Wynacom, Mlabs and Medisynclab, and kept the print screen as a fallback.
  - Made the worker safe: it skips orders that have not changed, never overwrites a result that is already e-signed, uses locks so the worker and the print screen do not collide, logs every sync in a tracking table, and can be switched on per hospital.
  - Built the Medisynclab test mapping screen, which links the hospital's lab tests to the lab system's items so test codes are always recognized.
  - Also contributed to the Medisynclab lab system itself, a Laravel API with a Python desktop app, working on its link to the hospital system and on importing and exporting test mappings.
- Radiology: Medipacs/Orthanc flow
  - A radiology order gets an accession number and is sent to the imaging machine's worklist over HL7 (a colleague built this part). The scanned images go to the Medipacs (Orthanc) server.
  - The problem: images were only linked to an order when someone opened the result popup, so the "images ready" badge stayed red until then. Built two ways to fix that.
  - Webhook: Orthanc calls the hospital system when a study is ready. It checks a signature and an optional IP allow-list, finds the order by accession number and stores the study IDs so the viewer can open it. It is safe to retry, every call is logged, and it replaced an older endpoint that had no authentication or logging, on the same URL.
  - Scheduled sync: every 5 minutes it asks Orthanc about orders still waiting from the last few days, one query per accession, and updates them. It has a kill switch and a dry-run mode, and can be switched on or off from the jobs monitoring screen.
  - Safe matching: some machines fill in their own accession number. Then it matches by patient number plus exam date, with a time tolerance, and skips and logs anything ambiguous. A wrong link is worse than a red badge.
  - Also documented and secured the endpoints Medipacs reads from the hospital system (diagnosis and report templates) with an API key.
- Radiology: PACS Thena flow
  - When a radiology order is saved, it is written to a table shared with Thena (a DB-to-DB link). A colleague built the base. Added the order number, patient ID and process code columns, and an order log table.
  - A background service polls Thena every 10 seconds, because the scheduler cannot go below one minute. A colleague built it and I extended it.
  - Thena sets an order to a draft status once the report is final. The hospital system saves the report and image links first, then confirms to Thena, so a failed save is retried on the next poll.
  - Since September 2026 it no longer pulls from the "approved" status, at Thena's request, to stop a race with their own review service.
  - Fixed a bug where old unfinished orders filled each batch and held back newer reports. Orders that carry a report now go first, and old unfinished ones are capped by age.
  - Built the monitoring page: statistics, order list, logs, orphan orders that can be rebuilt, and a fetch-now button.
- Pharmacy: worked on the prescription modules: prescription validation, final prescriptions, outpatient (external) prescriptions with returns and invoices, queue numbers with prefixes, daily-dose lists, and print layouts. Added the online pharmacy (APOL) history and bulk sending, and created the doctor prescription templates module.
- Nutrition assessment: built a child nutrition-status assessment module from scratch (tables, screens and rules based on weight, length and BMI), and added the BMI score to the patient header.
- Breast-milk labels: built the breast-milk label printing module end to end, from the table and screens to the PDF label.
- Diet labels and reports: built configurable diet-label printing (templates, text, packaging times, allergy warnings) and configurable diet report columns with Excel and PDF output. Added multi-meal diets and allergy tracking to inpatient diet orders.
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
