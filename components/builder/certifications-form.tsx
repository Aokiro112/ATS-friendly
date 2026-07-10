'use client';

import { useResumeStore } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function CertificationsForm() {
  const certifications = useResumeStore((s) => s.certifications);
  const addCertification = useResumeStore((s) => s.addCertification);
  const updateCertification = useResumeStore((s) => s.updateCertification);
  const removeCertification = useResumeStore((s) => s.removeCertification);

  const handleAdd = () => {
    addCertification({
      id: crypto.randomUUID(),
      name: '',
      issuer: '',
      date: '',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Certifications{' '}
          <span className="text-sm font-normal text-muted-foreground">
            (Optional)
          </span>
        </h3>
        <Button variant="outline" size="sm" onClick={handleAdd}>
          + Add Certification
        </Button>
      </div>

      {certifications.length === 0 && (
        <p className="text-sm text-muted-foreground py-2">
          No certifications yet. Click &quot;Add Certification&quot; to get started.
        </p>
      )}

      <div className="space-y-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="border border-border rounded-lg p-4 space-y-3"
          >
            <div className="space-y-1.5">
              <Label className="text-sm font-medium">Certification Name</Label>
              <Input
                placeholder="e.g., AWS Solutions Architect"
                value={cert.name}
                onChange={(e) =>
                  updateCertification(cert.id, { name: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">Issuer</Label>
                <Input
                  placeholder="e.g., Amazon Web Services"
                  value={cert.issuer}
                  onChange={(e) =>
                    updateCertification(cert.id, { issuer: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">Date</Label>
                <Input
                  placeholder="e.g., 2024"
                  value={cert.date}
                  onChange={(e) =>
                    updateCertification(cert.id, { date: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeCertification(cert.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
