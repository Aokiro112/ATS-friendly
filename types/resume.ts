export interface PersonalInfo {
  fullName: string;
  jobTitle?: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Education {
  id: string;
  college: string;
  degree: string;
  duration: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  dates: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export type TemplateType = 'classic' | 'minimal' | 'modern';

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: string[];
  certifications: Certification[];
  selectedTemplate: TemplateType;
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: 'MICHAEL HARRIS',
    jobTitle: 'Digital Marketing | SEO | SEM | Content Marketing',
    email: 'michael.harris@email.com',
    phone: '+61 412 345 678',
    location: 'Sydney, Australia',
    linkedin: 'linkedin.com/in/michaelharris',
    github: '',
  },
  summary:
    'Results-oriented marketing professional with over 5 years of experience in digital marketing, brand strategy, and content creation. Proven ability to drive brand growth, increase online engagement, and deliver data-driven results. Expert in utilizing digital tools and analytics to optimize marketing campaigns and achieve business objectives.',
  experience: [
    {
      id: '1',
      position: 'Marketing Manager',
      company: 'XYZ Corporation, Sydney, NSW',
      dates: 'January 2022 – Present',
      description:
        '• Lead a team of 5 in creating and executing digital marketing strategies across multiple platforms, including social media, SEO, and email campaigns.\n• Achieved a 35% increase in website traffic and 50% boost in social media engagement within the first year.\n• Managed a marketing budget of $200,000, ensuring maximum ROI through cost-effective advertising strategies.',
    },
    {
      id: '2',
      position: 'Digital Marketing Specialist',
      company: 'ABC Solutions, Melbourne, VIC',
      dates: 'June 2018 – December 2021',
      description:
        '• Developed and executed SEO and SEM strategies that increased organic search traffic by 25%.\n• Created and managed Google Ads and Facebook Ads campaigns, resulting in a 20% increase in qualified leads.\n• Produced engaging content for blogs, newsletters, and social media platforms to attract target audiences.',
    },
  ],
  education: [
    {
      id: '1',
      degree: 'Bachelor of Marketing',
      college: 'University of Sydney, Sydney, NSW',
      duration: 'Graduated: 2018',
    },
  ],
  skills: [
    'Digital Marketing Strategy, SEO & SEM, Google Analytics & SEMrush',
    'Social Media Marketing, Content Creation & Copywriting, Budget Management, Data Analysis',
  ],
  certifications: [
    {
      id: '1',
      name: 'Google Analytics Certified',
      issuer: '',
      date: '',
    },
    {
      id: '2',
      name: 'Facebook Blueprint Certification',
      issuer: '',
      date: '',
    },
    {
      id: '3',
      name: 'HubSpot Inbound Marketing Certification',
      issuer: '',
      date: '',
    },
  ],
  projects: [],
  selectedTemplate: 'classic',
};
