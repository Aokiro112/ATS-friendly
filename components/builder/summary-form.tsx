'use client';

import { useResumeStore } from '@/lib/store';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function SummaryForm() {
  const summary = useResumeStore((state) => state.summary);
  const updateSummary = useResumeStore((state) => state.updateSummary);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">
        Professional Summary
      </h2>

      <div className="space-y-1.5">
        <Label htmlFor="summary" className="text-sm font-medium text-foreground">
          Summary
        </Label>
        <Textarea
          id="summary"
          placeholder="Write a brief professional summary..."
          value={summary}
          onChange={(e) => updateSummary(e.target.value)}
          rows={4}
        />
        <p className="text-xs text-muted-foreground">
          {summary.length} characters · 300–500 recommended
        </p>
      </div>
    </div>
  );
}
