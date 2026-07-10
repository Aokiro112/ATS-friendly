'use client';

import { useResumeStore } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function EducationForm() {
  const education = useResumeStore((state) => state.education);
  const addEducation = useResumeStore((state) => state.addEducation);
  const updateEducation = useResumeStore((state) => state.updateEducation);
  const removeEducation = useResumeStore((state) => state.removeEducation);

  const handleAdd = () => {
    addEducation({
      id: crypto.randomUUID(),
      college: '',
      degree: '',
      duration: '',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Education</h2>
        <Button variant="outline" size="sm" onClick={handleAdd}>
          Add Education
        </Button>
      </div>

      {education.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No education entries yet. Click &quot;Add Education&quot; to get started.
        </p>
      ) : (
        <div className="space-y-4">
          {education.map((entry) => (
            <div
              key={entry.id}
              className="space-y-3 rounded-lg border border-border p-4"
            >
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  College / University
                </Label>
                <Input
                  placeholder="Massachusetts Institute of Technology"
                  value={entry.college}
                  onChange={(e) =>
                    updateEducation(entry.id, { college: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  Degree
                </Label>
                <Input
                  placeholder="B.S. in Computer Science"
                  value={entry.degree}
                  onChange={(e) =>
                    updateEducation(entry.id, { degree: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  Duration
                </Label>
                <Input
                  placeholder="Aug 2019 – May 2023"
                  value={entry.duration}
                  onChange={(e) =>
                    updateEducation(entry.id, { duration: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-600"
                  onClick={() => removeEducation(entry.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
