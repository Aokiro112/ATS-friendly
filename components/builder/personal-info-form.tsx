'use client';

import { useResumeStore } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function PersonalInfoForm() {
  const personalInfo = useResumeStore((state) => state.personalInfo);
  const updatePersonalInfo = useResumeStore((state) => state.updatePersonalInfo);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">
        Personal Information
      </h2>

      <div className="space-y-3">
        {/* Full Name */}
        <div className="space-y-1.5">
          <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            value={personalInfo.fullName}
            onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={personalInfo.email}
            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
          />
        </div>

        {/* Phone & Location - 2 columns on md+ */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={personalInfo.phone}
              onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="location" className="text-sm font-medium text-foreground">
              Location
            </Label>
            <Input
              id="location"
              placeholder="New York, NY"
              value={personalInfo.location}
              onChange={(e) => updatePersonalInfo({ location: e.target.value })}
            />
          </div>
        </div>

        {/* LinkedIn & GitHub - 2 columns on md+ */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="linkedin" className="text-sm font-medium text-foreground">
              LinkedIn
            </Label>
            <Input
              id="linkedin"
              placeholder="linkedin.com/in/johndoe"
              value={personalInfo.linkedin}
              onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="github" className="text-sm font-medium text-foreground">
              GitHub
            </Label>
            <Input
              id="github"
              placeholder="github.com/johndoe"
              value={personalInfo.github}
              onChange={(e) => updatePersonalInfo({ github: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
