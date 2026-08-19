'use client';

import { forwardRef } from 'react';
import { useResumeStore } from '@/lib/store';
import { templates } from '@/templates';
import { useHydrated } from '@/hooks/use-hydrated';
import type { ResumeData } from '@/types/resume';

interface ResumePreviewProps {
  className?: string;
}

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  function ResumePreview({ className }, ref) {
    const hydrated = useHydrated();

    const personalInfo = useResumeStore((s) => s.personalInfo);
    const summary = useResumeStore((s) => s.summary);
    const education = useResumeStore((s) => s.education);
    const experience = useResumeStore((s) => s.experience);
    const projects = useResumeStore((s) => s.projects);
    const skills = useResumeStore((s) => s.skills);
    const certifications = useResumeStore((s) => s.certifications);
    const selectedTemplate = useResumeStore((s) => s.selectedTemplate);

    if (!hydrated) {
      return (
        <div className={className}>
          <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm resume-preview-container flex items-center justify-center">
            <div className="text-[#6B7280] text-sm">Loading preview...</div>
          </div>
        </div>
      );
    }

    const resumeData: ResumeData = {
      personalInfo,
      summary,
      education,
      experience,
      projects,
      skills,
      certifications,
      selectedTemplate,
    };

    const TemplateComponent = templates[selectedTemplate];

    return (
      <div className={className}>
        {/* Crisp Paper Preview for the UI */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-md overflow-x-auto p-2 sm:p-4">
          <div className="max-w-[850px] mx-auto bg-white border border-[#E2E8F0] shadow-sm rounded-sm">
            <TemplateComponent data={resumeData} />
          </div>
        </div>

        {/* Hidden full-size version for printing */}
        <div className="hidden">
          <div ref={ref}>
            <TemplateComponent data={resumeData} />
          </div>
        </div>
      </div>
    );
  }
);
