'use client';

import { PersonalInfoForm } from './personal-info-form';
import { SummaryForm } from './summary-form';
import { ExperienceForm } from './experience-form';
import { EducationForm } from './education-form';
import { ProjectsForm } from './projects-form';
import { SkillsForm } from './skills-form';
import { CertificationsForm } from './certifications-form';
import { Separator } from '@/components/ui/separator';

export function ResumeForm() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Build Your Resume</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Fill in your details below. Changes appear in the preview instantly.
        </p>
      </div>

      <PersonalInfoForm />
      <Separator />
      <SummaryForm />
      <Separator />
      <ExperienceForm />
      <Separator />
      <EducationForm />
      <Separator />
      <ProjectsForm />
      <Separator />
      <SkillsForm />
      <Separator />
      <CertificationsForm />
    </div>
  );
}
