const experience: Experience[] = [
  {
    company: 'Alfatih Solusindo Technology',
    job: 'Full Stack Developer',
    location: 'Karawang, West Java, Indonesia',
    startDate: 'Oct 2024',
    endDate: 'Present',
    description: `I work on a hospital information system (SIMRS) that several hospitals use every day. It's a Laravel and Blade codebase shared by a large team. I take work from database to screen: migrations and SQL views, controllers, then the pages, print layouts and Excel or PDF exports. Most of my days are tickets, new features and fixes, mostly in the lab, radiology, pharmacy and reports modules.
- Reports
  - Report builder: in my first months, built a report builder (report types and access control) and the first set of reports on top of it: outpatient admissions, cashier revenue, pharmacy prescriptions, TB-DOTS drug and mask use, marketing demographics and inventory purchasing.
  - Reports module: in 2026, built the admission reports in the new reports module (daily register, visit recap, outpatient visits per clinic, registration queue, census and statistics, inpatient admissions, patient mutation, class upgrades, bed availability, waiting list, new and returning patients, appointments) and a configurable general visits report. Each report is backed by an SQL view with its own migration and menu entry, with filters, an on-screen preview and Excel export.
  - Regulatory (RL) forms: in 2025, built the first version of more than 20 RL report forms (visit recaps, inpatient and outpatient activity, laboratory, radiology, surgery, rehabilitation, pharmacy, payment methods, and top-ten disease and death rankings). In the newer reporting module, wrote the SQL functions for RL 3.9, 3.11 and 3.13 and fixed RL 3.8. Colleagues built the rest.
  - Excel exports: fixed exports that failed to download or would not open in newer Excel, across inventory, billing and pharmacy reports.
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
- Pharmacy
  - Worked on the prescription modules, mostly extending and fixing features built by colleagues: prescription validation, final prescriptions, external (outpatient) prescriptions, returns and invoices.
  - Pharmacy queues: showed the queue number on validation and printed it automatically, fixed duplicate numbers across guarantors, and added queues for external prescriptions and for cito and online (APOL) prescriptions.
  - Unit-dose (daily dose) lists and printouts, with an alert when a patient's unit differs.
  - Print layouts for final prescriptions, medicine labels, unit-dose sheets and bills: fixed layouts, logos, paper sizes and missing items.
  - Added a custom prescription copy (add medicines by hand), a list of cancelled prescriptions with a filter, and a clear reason when an external prescription cannot be returned.
  - Online pharmacy (APOL): built the medication history module and a guard against duplicate items when saving.
  - Created the doctor prescription templates module, which imports master templates for compounded and non-compounded orders from Excel.
- Nutrition (Gizi)
  - Created the child nutrition-status module: 25 status categories across five growth indices (weight, length or height, and BMI for age), automatic BMI and age in months, and a status badge on the outpatient, inpatient, ER and support-services patient lists.
  - Breast-milk labels: built the module end to end. A nurse opens the patient's notes, the patient details fill in by themselves, only the date and time are entered, and the label is saved to a print history and printed as a PDF sized to one sticker. Chose PDF over browser printing because printer drivers changed the paper size and browser headers ended up on the sticker.
  - Diet labels: merged three separate label renderers into one, with templates for different print formats, free-text fields, packaging time and an allergy note, plus a settings page for font, visibility and text position. Kept the old path as a fallback so existing hospitals saw no change.
  - Diet lists and reports: configurable PDF and Excel columns, and added multi-meal diets, allergy tracking, diet diagnosis, a nutrition-given checklist and insurance (COB) info.
  - Fixed many details in diet lists and prints, like truncated names, packaging times and shared room names.
- Billing and invoices
  - Worked on the cashier side of the system, which a colleague built. Most of my work was fixing and extending the printed billing, pre-billing, invoice and receipt layouts: headers and logos, subtotals and rounding, duplicate lines, comparison billing, and deposit and insurance receipts.
  - Outside-prescription invoices: fixed closing and duplicate-item bugs, and added a guard for prescriptions edited after the invoice was opened.
  - Added an accounting role that only sees the pre-billing button on non-patient invoices, per-branch cash selection, an option to show or hide the staff signature on bills, and LOC document upload in the cashier screens.
  - Fixed billing calculation bugs: returned drugs not deducted, group tariff discounts not applied, wrong admin fees, and refunds on fully paid invoices. Also fixed SQL injection issues in the invoice controllers.
- Security: added a forced password change on first login, configurable per hospital.
- Wrote automated tests for the laboratory, radiology and PACS Thena features.`,
  },
  {
    company: 'PT Winni Code Garuda Indonesia',
    job: 'Full Stack Developer',
    location: 'Bandung, West Java, Indonesia',
    startDate: 'Aug 2024',
    endDate: 'Oct 2024',
    description: `Create a proposal for designing an integrated e-system based on a website and explain the
background of the project, the reasons for taking on the project, and determine the timeline
for completing the project.`,
  },
  {
    company: 'PT Citi Asia Internasional',
    job: 'Full Stack Developer',
    location: 'South Jakarta, Jakarta, Indonesia',
    startDate: 'Aug 2023',
    endDate: 'Dec 2023',
    description: `During my internship as a Full Stack Developer I was assigned to determine the structure of web pages and convert website designs into front-end code to share features on web pages, 
Directly involved in organizing, directing and implementing projects according to the planned schedule, documenting applications that have been developed and collaborating with the Project Management Team, System Analysts, Designers and UI/UX Developers in web application development.`,
  },
  {
    company: 'PT Solusi Tiga Selaras',
    job: 'Full Stack Developer',
    location: 'South Jakarta, Jakarta, Indonesia',
    startDate: 'Aug 2022',
    endDate: 'Dec 2022',
    description: `During my internship as a Full Stack Developer, I was assigned to create an internal web application call using Javascript and PHP framework Laravel, implement database design using the PHP Artisan Console feature in the Laravel framework, fix bugs in application development, document applications that have been developed, and collaborate with Project Management Team, Developers and QA team during web application development.`,
  },
];

export { experience };
