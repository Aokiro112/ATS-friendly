import { z } from 'zod';

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional().default(''),
  location: z.string().optional().default(''),
  linkedin: z.string().optional().default(''),
  github: z.string().optional().default(''),
});

export const educationSchema = z.object({
  id: z.string(),
  college: z.string().min(1, 'College name is required'),
  degree: z.string().min(1, 'Degree is required'),
  duration: z.string().optional().default(''),
});

export const experienceSchema = z.object({
  id: z.string(),
  company: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Position is required'),
  dates: z.string().optional().default(''),
  description: z.string().optional().default(''),
});

export const projectSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Project name is required'),
  description: z.string().optional().default(''),
  technologies: z.string().optional().default(''),
  link: z.string().optional().default(''),
});

export const certificationSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Certification name is required'),
  issuer: z.string().optional().default(''),
  date: z.string().optional().default(''),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
export type EducationFormData = z.infer<typeof educationSchema>;
export type ExperienceFormData = z.infer<typeof experienceSchema>;
export type ProjectFormData = z.infer<typeof projectSchema>;
export type CertificationFormData = z.infer<typeof certificationSchema>;
