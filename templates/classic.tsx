import { ResumeData } from '@/types/resume';

export function ClassicTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, summary, education, experience, projects, skills, certifications } = data;

  const contactParts = [
    personalInfo.location,
    personalInfo.email,
    personalInfo.phone,
    personalInfo.linkedin,
    personalInfo.github,
  ].filter(Boolean);

  const renderBullets = (text: string) => {
    if (!text) return null;
    const lines = text
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length === 0) return null;

    return (
      <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2 text-sm text-black leading-relaxed">
        {lines.map((line, idx) => {
          const cleanLine = line.replace(/^[•\-\*]\s*/, '');
          return <li key={idx}>{cleanLine}</li>;
        })}
      </ul>
    );
  };

  return (
    <div className="resume-page p-8 sm:p-12 text-black leading-normal bg-white font-sans max-w-[850px] mx-auto min-h-[1050px]">
      {/* ── Header ── */}
      <div className="text-center mb-6">
        {personalInfo.fullName && (
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-black mb-1.5">
            {personalInfo.fullName}
          </h1>
        )}
        {personalInfo.jobTitle && (
          <p className="text-base font-bold text-black mb-1.5">
            {personalInfo.jobTitle}
          </p>
        )}
        {contactParts.length > 0 && (
          <p className="text-sm font-normal text-gray-800">
            {contactParts.join(' | ')}
          </p>
        )}
      </div>

      {/* ── Professional Summary ── */}
      {summary && (
        <section className="mb-6">
          <h2 className="uppercase font-bold text-base text-black tracking-wide">
            Professional Summary
          </h2>
          <hr className="border-t border-black my-1.5" />
          <p className="text-sm leading-relaxed text-black font-normal">{summary}</p>
        </section>
      )}

      {/* ── Work Experience ── */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-bold text-base text-black tracking-wide">
            Work Experience
          </h2>
          <hr className="border-t border-black my-1.5" />
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                {exp.position && (
                  <h3 className="font-bold text-sm sm:text-base text-black leading-snug">
                    {exp.position}
                  </h3>
                )}
                <div className="flex justify-between items-baseline text-sm font-bold text-black mt-0.5">
                  <span>{exp.company}</span>
                  {exp.dates && <span className="shrink-0 ml-4 font-bold">{exp.dates}</span>}
                </div>
                {exp.description && renderBullets(exp.description)}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Education ── */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-bold text-base text-black tracking-wide">
            Education
          </h2>
          <hr className="border-t border-black my-1.5" />
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                {edu.degree && (
                  <h3 className="font-bold text-sm sm:text-base text-black leading-snug">
                    {edu.degree}
                  </h3>
                )}
                <div className="flex justify-between items-baseline text-sm font-bold text-black mt-0.5">
                  <span>{edu.college}</span>
                  {edu.duration && (
                    <span className="shrink-0 ml-4 font-bold">{edu.duration}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Skills ── */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-bold text-base text-black tracking-wide">
            Skills
          </h2>
          <hr className="border-t border-black my-1.5" />
          <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-black leading-relaxed">
            {skills.map((skill, idx) => {
              const cleanSkill = skill.replace(/^[•\-\*]\s*/, '');
              return <li key={idx}>{cleanSkill}</li>;
            })}
          </ul>
        </section>
      )}

      {/* ── Certifications ── */}
      {certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-bold text-base text-black tracking-wide">
            Certifications
          </h2>
          <hr className="border-t border-black my-1.5" />
          <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-black leading-relaxed">
            {certifications.map((cert) => {
              const title = cert.issuer ? `${cert.name} — ${cert.issuer}` : cert.name;
              return (
                <li key={cert.id}>
                  <div className="inline-flex justify-between items-baseline w-full">
                    <span>{title}</span>
                    {cert.date && (
                      <span className="text-gray-600 text-xs ml-4 shrink-0 font-normal">
                        {cert.date}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* ── Projects ── */}
      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-bold text-base text-black tracking-wide">
            Projects
          </h2>
          <hr className="border-t border-black my-1.5" />
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-sm sm:text-base text-black">{project.name}</span>
                  {project.technologies && (
                    <span className="text-sm font-normal text-gray-700">({project.technologies})</span>
                  )}
                </div>
                {project.description && renderBullets(project.description)}
                {project.link && (
                  <p className="text-xs text-gray-700 mt-1">{project.link}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
