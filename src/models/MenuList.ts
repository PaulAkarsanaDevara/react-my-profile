const menuListItem: MenuItem[] = [
  {
    name: 'Home',
    links: '/',
  },
  {
    name: 'About',
    links: '/me',
  },

  {
    name: 'Resume',
    links: '/resume',
  },

  {
    name: 'Portfolio',
    links: '/portfolio',
  },

  {
    name: 'Contact',
    links: '/contact',
  },
];

/** Translation key for each menu entry, by route. */
const menuLabelKeys = {
  '/': 'nav.home',
  '/me': 'nav.about',
  '/resume': 'nav.resume',
  '/portfolio': 'nav.portfolio',
  '/contact': 'nav.contact',
} as const;

export { menuListItem, menuLabelKeys };
