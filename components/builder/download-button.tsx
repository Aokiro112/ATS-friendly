'use client';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button } from '@/components/ui/button';

interface DownloadButtonProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

export function DownloadButton({ contentRef, className }: DownloadButtonProps) {
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: 'Resume',
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {
        html, body {
          height: 100%;
          margin: 0 !important;
          padding: 0 !important;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .resume-page {
          width: 210mm;
          min-height: 297mm;
          padding: 15mm 20mm;
          margin: 0;
          box-shadow: none !important;
          border: none !important;
        }
      }
    `,
  });

  return (
    <Button
      onClick={() => handlePrint()}
      className={className}
      size="lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download PDF
    </Button>
  );
}
