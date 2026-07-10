'use client';

import { useResumeStore } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function ProjectsForm() {
  const projects = useResumeStore((state) => state.projects);
  const addProject = useResumeStore((state) => state.addProject);
  const updateProject = useResumeStore((state) => state.updateProject);
  const removeProject = useResumeStore((state) => state.removeProject);

  const handleAdd = () => {
    addProject({
      id: crypto.randomUUID(),
      name: '',
      description: '',
      technologies: '',
      link: '',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Projects</h2>
        <Button variant="outline" size="sm" onClick={handleAdd}>
          Add Project
        </Button>
      </div>

      {projects.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No project entries yet. Click &quot;Add Project&quot; to get started.
        </p>
      ) : (
        <div className="space-y-4">
          {projects.map((entry) => (
            <div
              key={entry.id}
              className="space-y-3 rounded-lg border border-border p-4"
            >
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  Project Name
                </Label>
                <Input
                  placeholder="My Awesome Project"
                  value={entry.name}
                  onChange={(e) =>
                    updateProject(entry.id, { name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  Description
                </Label>
                <Textarea
                  placeholder="What does this project do?"
                  value={entry.description}
                  onChange={(e) =>
                    updateProject(entry.id, { description: e.target.value })
                  }
                  rows={3}
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  Technologies
                </Label>
                <Input
                  placeholder="React, TypeScript, Node.js"
                  value={entry.technologies}
                  onChange={(e) =>
                    updateProject(entry.id, { technologies: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-foreground">
                  Link
                </Label>
                <Input
                  placeholder="https://github.com/user/project"
                  value={entry.link}
                  onChange={(e) =>
                    updateProject(entry.id, { link: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-600"
                  onClick={() => removeProject(entry.id)}
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
