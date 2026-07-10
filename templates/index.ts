import { ClassicTemplate } from './classic';
import { MinimalTemplate } from './minimal';
import { ModernTemplate } from './modern';
import { TemplateType } from '@/types/resume';
import { ComponentType } from 'react';
import { ResumeData } from '@/types/resume';

export const templates: Record<TemplateType, ComponentType<{ data: ResumeData }>> = {
  classic: ClassicTemplate,
  minimal: MinimalTemplate,
  modern: ModernTemplate,
};

export const templateNames: Record<TemplateType, string> = {
  classic: 'Classic',
  minimal: 'Minimal',
  modern: 'Modern',
};
