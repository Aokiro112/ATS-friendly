'use client';

import { useResumeStore } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function ExperienceForm() {
  const experience = useResumeStore((state) => state.experience);
  const addExperience = useResumeStore((state) => state.addExperience);
  const updateExperience = useResumeStore((state) => state.updateExperience);
  const removeExperience = useResumeStore((state) => state.removeExperience);

  const handleAdd = () => {
    addExperience({
      id: crypto.randomUUID(),
      company: '',
      position: '',
      dates: '',
      description: '',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          Work Experience
        </h2>
        <Button variant="outline" size="sm" onClick={handleAdd}>
          Add Experience
        </Button>
      </div>

      {experience.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No experience entries yet. Click &quot;Add Experience&quot; to get
          started.
        </p>
      ) : (
        <div className="space-y-4">
          {experience.map((entry) => (
            <div
              key={entry.id}
              className="space-y-3 rounded-lg border border-border p-4"
            >
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  Company
                </Label>
                <Input
                  placeholder="Google"
                  value={entry.company}
                  onChange={(e) =>
                    updateExperience(entry.id, { company: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  Position
                </Label>
                <Input
                  placeholder="Software Engineer"
                  value={entry.position}
                  onChange={(e) =>
                    updateExperience(entry.id, { position: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  Dates
                </Label>
                <Input
                  placeholder="Jan 2023 – Present"
                  value={entry.dates}
                  onChange={(e) =>
                    updateExperience(entry.id, { dates: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  Description
                </Label>
                <Textarea
                  placeholder="Describe your responsibilities and achievements..."
                  value={entry.description}
                  onChange={(e) =>
                    updateExperience(entry.id, {
                      description: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-600"
                  onClick={() => removeExperience(entry.id)}
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
