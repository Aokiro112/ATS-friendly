import { ResumeData } from '@/types/resume';

export function ModernTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, summary, education, experience, projects, skills, certifications } = data;

  const contactParts = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.location,
    personalInfo.linkedin,
    personalInfo.github,
  ].filter(Boolean);

  return (
    <div className="resume-page p-8 text-[#111111] leading-normal">
      {/* ── Header ── */}
      <div className="mb-5">
        {personalInfo.fullName && (
          <h1 className="text-2xl font-bold mb-1">{personalInfo.fullName}</h1>
        )}
        {contactParts.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
            {contactParts.map((part, i) => (
              <span key={i}>{part}</span>
            ))}
          </div>
        )}
      </div>

      {/* ── Summary ── */}
      {summary && (
        <section className="mt-5">
          <h2 className="text-base font-semibold border-l-4 border-[#2563EB] pl-3 mb-2">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed">{summary}</p>
        </section>
      )}

      {/* ── Experience ── */}
      {experience.length > 0 && (
        <section className="mt-5">
          <h2 className="text-base font-semibold border-l-4 border-[#2563EB] pl-3 mb-2">
            Experience
          </h2>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-sm font-semibold">{exp.company}</span>
                    {exp.position && (
                      <span className="text-sm text-gray-600"> — {exp.position}</span>
                    )}
                  </div>
                  {exp.dates && (
                    <span className="text-xs text-gray-500 shrink-0 ml-4">
                      {exp.dates}
                    </span>
                  )}
                </div>
                {exp.description && (
                  <p className="text-sm leading-relaxed mt-1 whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Education ── */}
      {education.length > 0 && (
        <section className="mt-5">
          <h2 className="text-base font-semibold border-l-4 border-[#2563EB] pl-3 mb-2">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-semibold">{edu.college}</span>
                  {edu.degree && (
                    <span className="text-sm text-gray-600"> — {edu.degree}</span>
                  )}
                </div>
                {edu.duration && (
                  <span className="text-xs text-gray-500 shrink-0 ml-4">
                    {edu.duration}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Skills ── */}
      {skills.length > 0 && (
        <section className="mt-5">
          <h2 className="text-base font-semibold border-l-4 border-[#2563EB] pl-3 mb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-100 px-2 py-0.5 rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ── Projects ── */}
      {projects.length > 0 && (
        <section className="mt-5">
          <h2 className="text-base font-semibold border-l-4 border-[#2563EB] pl-3 mb-2">
            Projects
          </h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold">{project.name}</span>
                  {project.technologies && (
                    <span className="text-xs text-gray-500">
                      ({project.technologies})
                    </span>
                  )}
                </div>
                {project.description && (
                  <p className="text-sm leading-relaxed mt-1">
                    {project.description}
                  </p>
                )}
                {project.link && (
                  <p className="text-sm text-gray-500 mt-0.5">{project.link}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Certifications ── */}
      {certifications.length > 0 && (
        <section className="mt-5">
          <h2 className="text-base font-semibold border-l-4 border-[#2563EB] pl-3 mb-2">
            Certifications
          </h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-semibold">{cert.name}</span>
                  {cert.issuer && (
                    <span className="text-sm text-gray-500"> — {cert.issuer}</span>
                  )}
                </div>
                {cert.date && (
                  <span className="text-xs text-gray-500 shrink-0 ml-4">
                    {cert.date}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
