import { ResumeData } from '@/types/resume';

export function ClassicTemplate({ data }: { data: ResumeData }) {
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
      <div className="text-center mb-4">
        {personalInfo.fullName && (
          <h1 className="text-2xl font-bold mb-1">{personalInfo.fullName}</h1>
        )}
        {contactParts.length > 0 && (
          <p className="text-sm text-gray-600">{contactParts.join(' | ')}</p>
        )}
      </div>

      {/* ── Summary ── */}
      {summary && (
        <section className="mt-4">
          <div className="border-t border-gray-300 pt-3">
            <h2 className="uppercase font-bold text-sm tracking-wider mb-2">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed">{summary}</p>
          </div>
        </section>
      )}

      {/* ── Experience ── */}
      {experience.length > 0 && (
        <section className="mt-4">
          <div className="border-t border-gray-300 pt-3">
            <h2 className="uppercase font-bold text-sm tracking-wider mb-2">
              Experience
            </h2>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold text-sm">{exp.company}</span>
                      {exp.position && (
                        <span className="italic text-sm"> — {exp.position}</span>
                      )}
                    </div>
                    {exp.dates && (
                      <span className="text-sm text-gray-600 shrink-0 ml-4">
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
          </div>
        </section>
      )}

      {/* ── Education ── */}
      {education.length > 0 && (
        <section className="mt-4">
          <div className="border-t border-gray-300 pt-3">
            <h2 className="uppercase font-bold text-sm tracking-wider mb-2">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-sm">{edu.college}</span>
                    {edu.degree && (
                      <span className="italic text-sm"> — {edu.degree}</span>
                    )}
                  </div>
                  {edu.duration && (
                    <span className="text-sm text-gray-600 shrink-0 ml-4">
                      {edu.duration}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Skills ── */}
      {skills.length > 0 && (
        <section className="mt-4">
          <div className="border-t border-gray-300 pt-3">
            <h2 className="uppercase font-bold text-sm tracking-wider mb-2">
              Skills
            </h2>
            <p className="text-sm leading-relaxed">{skills.join(', ')}</p>
          </div>
        </section>
      )}

      {/* ── Projects ── */}
      {projects.length > 0 && (
        <section className="mt-4">
          <div className="border-t border-gray-300 pt-3">
            <h2 className="uppercase font-bold text-sm tracking-wider mb-2">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-sm">{project.name}</span>
                    {project.technologies && (
                      <span className="text-sm text-gray-600">
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
                    <p className="text-sm text-gray-600 mt-0.5">{project.link}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Certifications ── */}
      {certifications.length > 0 && (
        <section className="mt-4">
          <div className="border-t border-gray-300 pt-3">
            <h2 className="uppercase font-bold text-sm tracking-wider mb-2">
              Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-sm">{cert.name}</span>
                    {cert.issuer && (
                      <span className="text-sm text-gray-600"> — {cert.issuer}</span>
                    )}
                  </div>
                  {cert.date && (
                    <span className="text-sm text-gray-600 shrink-0 ml-4">
                      {cert.date}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
