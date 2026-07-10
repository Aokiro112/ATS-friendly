import { ResumeData } from '@/types/resume';

export function MinimalTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, summary, education, experience, projects, skills, certifications } = data;

  const contactParts = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.location,
    personalInfo.linkedin,
    personalInfo.github,
  ].filter(Boolean);

  return (
    <div className="resume-page p-10 text-[#111111] leading-normal">
      {/* ── Header ── */}
      <div className="mb-6">
        {personalInfo.fullName && (
          <h1 className="text-3xl font-light mb-2">{personalInfo.fullName}</h1>
        )}
        {contactParts.length > 0 && (
          <p className="text-sm text-gray-500">{contactParts.join(' · ')}</p>
        )}
      </div>

      {/* ── Summary ── */}
      {summary && (
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-8 mb-3">
            Summary
          </h2>
          <p className="text-sm font-light leading-relaxed">{summary}</p>
        </section>
      )}

      {/* ── Experience ── */}
      {experience.length > 0 && (
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-8 mb-3">
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium">{exp.company}</span>
                  {exp.dates && (
                    <span className="text-sm text-gray-400 shrink-0 ml-4">
                      {exp.dates}
                    </span>
                  )}
                </div>
                {exp.position && (
                  <p className="text-sm text-gray-500 mt-0.5">{exp.position}</p>
                )}
                {exp.description && (
                  <p className="text-sm font-light leading-relaxed mt-1 whitespace-pre-line">
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
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-8 mb-3">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-medium">{edu.college}</span>
                  {edu.degree && (
                    <span className="text-sm text-gray-500"> — {edu.degree}</span>
                  )}
                </div>
                {edu.duration && (
                  <span className="text-sm text-gray-400 shrink-0 ml-4">
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
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-8 mb-3">
            Skills
          </h2>
          <p className="text-sm font-light leading-relaxed">
            {skills.join(', ')}
          </p>
        </section>
      )}

      {/* ── Projects ── */}
      {projects.length > 0 && (
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-8 mb-3">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <span className="text-sm font-medium">{project.name}</span>
                {project.technologies && (
                  <span className="text-sm text-gray-400 ml-2">
                    ({project.technologies})
                  </span>
                )}
                {project.description && (
                  <p className="text-sm font-light leading-relaxed mt-1">
                    {project.description}
                  </p>
                )}
                {project.link && (
                  <p className="text-sm text-gray-400 mt-0.5">{project.link}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Certifications ── */}
      {certifications.length > 0 && (
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-8 mb-3">
            Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-medium">{cert.name}</span>
                  {cert.issuer && (
                    <span className="text-sm text-gray-400"> — {cert.issuer}</span>
                  )}
                </div>
                {cert.date && (
                  <span className="text-sm text-gray-400 shrink-0 ml-4">
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
