import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  ResumeData,
  defaultResumeData,
  PersonalInfo,
  Education,
  Experience,
  Project,
  Certification,
  TemplateType,
} from '@/types/resume';

interface ResumeStore extends ResumeData {
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  updateSummary: (summary: string) => void;

  addEducation: (education: Education) => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  removeEducation: (id: string) => void;

  addExperience: (experience: Experience) => void;
  updateExperience: (id: string, experience: Partial<Experience>) => void;
  removeExperience: (id: string) => void;

  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  removeProject: (id: string) => void;

  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;

  addCertification: (certification: Certification) => void;
  updateCertification: (id: string, certification: Partial<Certification>) => void;
  removeCertification: (id: string) => void;

  setTemplate: (template: TemplateType) => void;
  resetResume: () => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      ...defaultResumeData,

      updatePersonalInfo: (info) =>
        set((state) => ({
          personalInfo: { ...state.personalInfo, ...info },
        })),

      updateSummary: (summary) => set({ summary }),

      addEducation: (education) =>
        set((state) => ({
          education: [...state.education, education],
        })),
      updateEducation: (id, education) =>
        set((state) => ({
          education: state.education.map((e) =>
            e.id === id ? { ...e, ...education } : e
          ),
        })),
      removeEducation: (id) =>
        set((state) => ({
          education: state.education.filter((e) => e.id !== id),
        })),

      addExperience: (experience) =>
        set((state) => ({
          experience: [...state.experience, experience],
        })),
      updateExperience: (id, experience) =>
        set((state) => ({
          experience: state.experience.map((e) =>
            e.id === id ? { ...e, ...experience } : e
          ),
        })),
      removeExperience: (id) =>
        set((state) => ({
          experience: state.experience.filter((e) => e.id !== id),
        })),

      addProject: (project) =>
        set((state) => ({
          projects: [...state.projects, project],
        })),
      updateProject: (id, project) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === id ? { ...p, ...project } : p
          ),
        })),
      removeProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),

      addSkill: (skill) =>
        set((state) => ({
          skills: state.skills.includes(skill)
            ? state.skills
            : [...state.skills, skill],
        })),
      removeSkill: (skill) =>
        set((state) => ({
          skills: state.skills.filter((s) => s !== skill),
        })),

      addCertification: (certification) =>
        set((state) => ({
          certifications: [...state.certifications, certification],
        })),
      updateCertification: (id, certification) =>
        set((state) => ({
          certifications: state.certifications.map((c) =>
            c.id === id ? { ...c, ...certification } : c
          ),
        })),
      removeCertification: (id) =>
        set((state) => ({
          certifications: state.certifications.filter((c) => c.id !== id),
        })),

      setTemplate: (selectedTemplate) => set({ selectedTemplate }),
      resetResume: () => set(defaultResumeData),
    }),
    {
      name: 'resumeflow-data',
    }
  )
);
