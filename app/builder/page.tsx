'use client';

import { useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useResumeStore } from '@/lib/store';
import { useHydrated } from '@/hooks/use-hydrated';
import { ResumeForm } from '@/components/builder/resume-form';
import { ResumePreview } from '@/components/preview/resume-preview';
import { DownloadButton } from '@/components/builder/download-button';
import { Button } from '@/components/ui/button';
import { templateNames } from '@/templates';
import type { TemplateType } from '@/types/resume';
import Link from 'next/link';

function BuilderContent() {
  const searchParams = useSearchParams();
  const resumeRef = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();

  const selectedTemplate = useResumeStore((s) => s.selectedTemplate);
  const setTemplate = useResumeStore((s) => s.setTemplate);

  // Set template from URL query on mount
  useEffect(() => {
    const template = searchParams.get('template') as TemplateType | null;
    if (template && ['classic', 'minimal', 'modern'].includes(template)) {
      setTemplate(template);
    }
  }, [searchParams, setTemplate]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] no-print">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-[#111111] hover:opacity-80 transition-opacity">
            ResumeFlow
          </Link>
          <div className="flex items-center gap-3">
            {/* Template selector */}
            {hydrated && (
              <div className="hidden sm:flex items-center gap-1.5">
                {(Object.keys(templateNames) as TemplateType[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setTemplate(key)}
                    className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                      selectedTemplate === key
                        ? 'bg-[#2563EB] text-white font-medium'
                        : 'text-[#6B7280] hover:text-[#111111] hover:bg-[#f3f4f6]'
                    }`}
                  >
                    {templateNames[key]}
                  </button>
                ))}
              </div>
            )}
            <DownloadButton contentRef={resumeRef} />
          </div>
        </div>
      </header>

      {/* Main builder area */}
      <main className="flex-1 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-3.5rem)]">
          {/* Left panel: Form */}
          <div className="w-full lg:w-1/2 lg:border-r border-[#E5E7EB] bg-white overflow-y-auto lg:h-[calc(100vh-3.5rem)]">
            <ResumeForm />
          </div>

          {/* Right panel: Preview */}
          <div className="w-full lg:w-1/2 overflow-y-auto lg:h-[calc(100vh-3.5rem)] p-4 sm:p-6 lg:p-8">
            {/* Mobile template selector */}
            {hydrated && (
              <div className="flex sm:hidden items-center gap-1.5 mb-4 overflow-x-auto pb-2">
                {(Object.keys(templateNames) as TemplateType[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setTemplate(key)}
                    className={`px-3 py-1.5 text-sm rounded-md whitespace-nowrap transition-all ${
                      selectedTemplate === key
                        ? 'bg-[#2563EB] text-white font-medium'
                        : 'text-[#6B7280] hover:text-[#111111] hover:bg-[#f3f4f6] border border-[#E5E7EB]'
                    }`}
                  >
                    {templateNames[key]}
                  </button>
                ))}
              </div>
            )}
            <ResumePreview ref={resumeRef} />

            {/* Mobile download button */}
            <div className="lg:hidden mt-4">
              <DownloadButton contentRef={resumeRef} className="w-full" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function BuilderPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-[#6B7280]">Loading builder...</div>
      </div>
    }>
      <BuilderContent />
    </Suspense>
  );
}
