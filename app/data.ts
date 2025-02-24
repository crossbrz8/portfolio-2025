type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Lumi',
    description:
      'Landing page for LUMI your canned sparkling wine, light, refreshing, and practical for every moment.',
    link: 'https://www.lumidrink.com.br/',
    video:
      'https://res.cloudinary.com/dptcix8i9/video/upload/q_auto,f_auto,w_1280,h_720/v1740436463/Screenity_video_-_Feb_24_2025_ljw6oc.mkv',
    id: 'project1',
  },
  {
    name: 'Serlares',
    description: 'Landing page for Serlares which provides healthy and customized corporate food services, promoting well-being and quality of life in the workplace.',
    link: 'https://www.serlares.com.br/',
    video:
      'https://res.cloudinary.com/dptcix8i9/video/upload/q_auto,f_auto,w_1280,h_720/v1740436608/Screenity_video_-_Feb_24_2025_1_mmlfgl.mkv',
    id: 'project2',
  },
  {
    name: 'Vortexz',
    description: 'Landing page for Vortexz which creates exceptional digital products, transforming ideas into impactful user experiences across all platforms.',
    link: 'https://vortexz.com.br/',
    video:
      'https://res.cloudinary.com/dptcix8i9/video/upload/q_auto,f_auto,w_1280,h_720/v1740436731/Screenity_video_-_Feb_24_2025_2_rtv3jz.mkv',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2025',
    end: 'Present',
    link: '',
    id: 'work1',
  },
  {
    company: 'Cappen',
    title: 'Design Engineer',
    start: '2024',
    end: 'Present',
    link: 'https://www.cappen.com/pt/',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Engineer',
    start: '2022',
    end: '2023',
    link: 'https://vortexz.com.br/',
    id: 'work3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/crossbrz8',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/Vini_G_M',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/vinicius-gm/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/vinigm1_/',
  },
]

export const EMAIL = 'viniciusmgcontact@gmail.co'
