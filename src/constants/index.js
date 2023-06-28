import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  wordpress,
  vurnee,
  maknaqurban,
  belajar,
  bikinweb,
  kuliah,
  kerja,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Development',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  
  {
    name: 'Wordpress',
    icon: wordpress,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  
  {
    name: 'git',
    icon: git,
  },
  
];

const experiences = [
  {
    title: 'Mulai Belajar Website',
    icon: belajar,
    iconBg: '#333333',
    date: '2017',
  },
  {
    title: 'Membuat Website Pertama',
    icon: bikinweb,
    iconBg: '#333333',
    date: '2018-2020',
  },
  {
    title: 'Kuliah Di Bidang Informatika',
    icon: kuliah,
    iconBg: '#333333',
    date: '2021-Sekarang',
  },
  {
    title: 'Mengambil Projek Freelance',
    icon: kerja,
    iconBg: '#333333',
    date: '2021 - Sekarang',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Vurnee Indonesia',
    description: 'Website Jual Beli Furniture Berbasis WordPress.',
    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
    ],
    image: vurnee,
    demo: 'https://vurnee.com/',
  },
  {
    id: 'project-2',
    name: 'Maknaqurban.id',
    description:
      'Website Jual Beli Hewan Qurban Berbasis Wordpress.',
    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
    ],
    image: maknaqurban,
    demo: 'https://maknaqurban.id/',
  },
];

export { services, technologies, experiences, projects };
