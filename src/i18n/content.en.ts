/**
 * English versions of the projects in `models/Project.ts`, which are written
 * in Indonesian. English is the default language, so these are what visitors
 * see unless they switch to Indonesian. Keyed by project id.
 */
export const projectsEn: Record<string, { name: string; description: string }> = {
  'simrs-sistem-informasi-rumah-sakit': {
    name: 'SIMRS: Hospital Information System',
    description:
      'A hospital information system used by several hospitals, built with a team at Alfatih Solusindo Technology. My part: integrating six lab systems and two PACS flows, the pharmacy and nutrition modules, admission and RL reports, and billing and invoice printouts. It is an internal company system, so there is no demo or code to open.',
  },
  'notea-aplikasi-catatan': {
    name: 'Notea: Notes App',
    description:
      'A notes app similar to Google Keep, with its own look. You can write text notes or checklists, add colors and labels, and view them as a board or a calendar. There is also a statistics page and hand sketches. Data is still stored in the browser, and will later be connected to a Laravel backend.',
  },
  'layarvia-penjelajah-film': {
    name: 'Layarvia: Movie Explorer',
    description:
      'An app for exploring movies with data from TMDB. You can search for movies, see details, trailers and where to watch, then save them to favorites or a watchlist. Pages are rendered on the server (SSR), and the language can be switched between Indonesian and English.',
  },
  'alaraya-cuaca-dan-gempa-indonesia': {
    name: 'Alaraya: Weather and Earthquakes',
    description:
      'An app to check the weather and earthquakes in Indonesia, with data straight from BMKG. Weather forecasts go down to the village level, and every earthquake comes with a map and an estimate of the shaking at your location. It has earthquake notifications, and its alert page still opens without internet.',
  },
  'sholatku-jadwal-sholat-dan-quran': {
    name: 'Sholatku: Prayer Times',
    description:
      'A prayer times app with a countdown to the next prayer. Besides daily and monthly schedules, it has the qibla direction, the Qur’an with tafsir and murottal, dhikr, and a daily prayer log. Adhan notifications still arrive even when the app is closed.',
  },
  'hari-libur-kalender-libur-nasional': {
    name: 'Indonesian Holidays',
    description:
      'A calendar of Indonesian national holidays. You can view it as a list or a calendar, with a countdown to the next holiday and long weekend info. There is also a working-day calculator and a day-before reminder through notifications.',
  },
  'tabunganku-tabungan-keuangan': {
    name: 'TabunganKu: Savings and Finance',
    description:
      'An app to track your money and save. You can set savings goals, record income and expenses, set monthly budgets, and see your total net worth. Data is stored on the device and can be locked with a PIN or biometrics.',
  },
  'masakyuk-resep-dari-bahan': {
    name: 'MasakYuk: Recipe Finder',
    description:
      'A recipe app you can search by name or by the ingredients you have. Recipes come from TheMealDB, plus 10 Indonesian dishes. Favorite recipes are saved in the browser.',
  },
  'proyek-implementasi-asynchronous-communication-pada-aplikasi': {
    name: 'Project: Asynchronous Communication in an E-Commerce App',
    description:
      'The final project of the course "Learn to Build Microservices Architecture". It starts from a Starter Project (E-Commerce App), uploads the container images to Docker Hub, and deploys the app with Docker Compose.',
  },
  'proyek-deploy-aplikasi-karsa-jobs-dengan-kubernetes': {
    name: 'Project: Deploying the Karsa Jobs App with Kubernetes',
    description:
      'The second project of the course "Learn to Build Microservices Architecture". It starts from a Starter Project (Karsa Jobs), writes scripts to build and push Docker images, and deploys the app to Kubernetes.',
  },
  'proyek-deploy-aplikasi-item-app-dengan-docker-compose': {
    name: 'Project: Deploying the Item App with Docker Compose',
    description:
      'The first project of the course "Learn to Build Microservices Architecture". It starts from a Starter Project (Item App), writes a Dockerfile and scripts to build and push Docker images, and uses Docker Compose.',
  },
  'proyek-membangun-ci-cd-pipeline-dengan-jenkins': {
    name: 'Project: Building a CI/CD Pipeline with Jenkins',
    description:
      'The final project of the course "Learn to Implement CI/CD". It builds on the previous project, adds a deploy stage, pauses the pipeline at the deploy stage, adds a manual approval stage, and monitors the Jenkins pipeline with Prometheus and Grafana.',
  },
  'proyek-membangun-ci-cd-pipeline-dengan-jenkins-2': {
    name: 'Project: Building a CI/CD Pipeline with Jenkins',
    description:
      'The first project of the course "Learn to Implement CI/CD". It uses the source code of a React app, enables the signup feature and creates a new account in Jenkins, and creates a new Jenkins pipeline.',
  },
  'proyek-konfigurasi-ssh-server': {
    name: 'Project: SSH Server Configuration',
    description:
      'The final project of the course "Become a Linux System Administrator". The requirements: create a new user, configure SSH, and create files that list the users and the SSH log.',
  },
  'proyek-shell-scripting': {
    name: 'Project: Shell Scripting',
    description:
      'The first project of the course "Become a Linux System Administrator". The requirements: create a shell script file, attach a file with the command history, and archive and compress files.',
  },
  'proyek-mendesain-ulang-tampilan-ui-website-smartnation-mengg': {
    name: 'Project: Redesigning the Smartnation Website UI with React',
    description: '',
  },
  'proyek-katalog-restoran-pwa-testing-and-optimized': {
    name: 'Project: Restaurant Catalogue PWA + Testing and Optimized',
    description: '',
  },
  'proyek-membangun-aplikasi-react-dengan-redux': {
    name: 'Project: Building a React App with Redux',
    description:
      'The first project of the course "Become a React Web Developer Expert". A React app themed "Discussion Forum App" that uses the Dicoding Forum API. You are free to be creative, as long as the app meets the stated criteria: app functionality, bug highlighting and app architecture.',
  },
  'proyek-menerapkan-automation-testing-dan-ci-cd-pada-aplikasi': {
    name: 'Project: Automation Testing and CI/CD for the Discussion Forum App',
    description:
      'The final project of the course "Become a React Web Developer Expert". A React app themed "Discussion Forum App" that uses the Dicoding Forum API. To pass the course, the assignment was to apply automation testing and CI/CD to the Discussion Forum App built in the previous submission: write unit, integration and end-to-end tests, deploy the app with CI/CD, and use one tool from the React ecosystem.',
  },
  'proyek-implementasi-redux-pada-aplikasi-sosial-media-open-sp': {
    name: 'Project: Redux in a Social Media App, Open Space (Twitter-like)',
    description:
      'Up to this point the course had covered every Redux feature through a simple To-do App. That is good for learning, but it does not represent the complexity of real industry projects. So with Redux, React Redux and React middleware, we build a more complex app with the essential features of a social network like Twitter: register, login and create a tweet (Open Space calls it a talk). Users have to register and log in before they can use the app and post a talk.',
  },
  'proyek-membangun-aplikasi-indonesia-berita-app-menggunakan-r': {
    name: 'Project: Building the Indonesia Berita App with React',
    description:
      'Indonesia Berita is a website that shows local, latest and international news. It is built with JavaScript and an Indonesian news backend API, and it is a PWA.',
  },
  'proyek-membangun-aplikasi-movie-catalogue-app': {
    name: 'Project: Building the Movie Catalogue App',
    description:
      'Movie Catalogue is a website that shows the newest and most popular movies right now. It is built with JavaScript and The Movie Database (TMDB) API as the backend, and it is a Progressive Web App (PWA).',
  },
  'proyek-membangun-aplikasi-football-club-finder-app': {
    name: 'Project: Building the Football Club Finder App',
    description:
      'Football Club Finder is a website for finding and listing football clubs. It is built with JavaScript.',
  },
  'proyek-membangun-aplikasi-catatan-menggunakan-react': {
    name: 'Project: Building a Notes App with React',
    description:
      'The final project of the course "Learn to Build Web Apps with React". A React app themed "Personal Notes App": it can list notes, add notes, delete notes, search notes, limit the characters of a note title, and archive notes.',
  },
  'proyek-membangun-aplikasi-todolist-app-menggunakan-vue': {
    name: 'Project: Building a TodoList App with Vue',
    description: '',
  },
  'proyek-membangun-aplikasi-lafood-app-menggunakan-flutter': {
    name: 'Project: Building the Lafood App with Flutter',
    description: 'A semester 3 assignment: building an app with the Flutter framework.',
  },
};
