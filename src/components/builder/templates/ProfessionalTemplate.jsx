export default function ProfessionalTemplate({ data }) {
  const { personal, education, skills, experience, projects, certifications, achievements } = data
  const techSkills = skills.technical ? skills.technical.split(',').map(s => s.trim()).filter(Boolean) : []
  const softSkills = skills.soft ? skills.soft.split(',').map(s => s.trim()).filter(Boolean) : []

  const sectionStyle = {
    marginBottom: '18px',
  }

  const headingStyle = {
    fontSize: '13px',
    fontWeight: '700',
    color: '#1a1a2e',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    borderBottom: '2px solid #1a1a2e',
    paddingBottom: '4px',
    marginBottom: '10px',
  }

  return (
    <div className="resume-template" style={{ width: '210mm', minHeight: '297mm', fontSize: '11px', lineHeight: '1.5', padding: '32px 36px', background: 'white', fontFamily: "'Inter', 'Georgia', serif" }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '3px double #1a1a2e', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#1a1a2e', margin: '0 0 6px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          {personal.fullName || 'Your Name'}
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '10px', color: '#475569' }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>| {personal.phone}</span>}
          {personal.linkedin && <span>| {personal.linkedin}</span>}
          {personal.github && <span>| {personal.github}</span>}
          {personal.portfolio && <span>| {personal.portfolio}</span>}
        </div>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: 'flex', gap: '24px' }}>
        {/* Left Column (wider) */}
        <div style={{ flex: '1.6' }}>
          {/* Summary */}
          {personal.summary && (
            <div style={sectionStyle}>
              <h2 style={headingStyle}>Professional Summary</h2>
              <p style={{ fontSize: '10.5px', color: '#334155', lineHeight: '1.7', textAlign: 'justify' }}>{personal.summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={headingStyle}>Professional Experience</h2>
              {experience.map((exp, i) => (
                <div key={i} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '12px', fontWeight: '700', color: '#1e293b' }}>{exp.role}</h3>
                    <span style={{ fontSize: '9.5px', color: '#64748b', fontStyle: 'italic' }}>{exp.duration}</span>
                  </div>
                  <p style={{ fontSize: '10.5px', color: '#475569', fontStyle: 'italic', marginBottom: '4px' }}>{exp.company}</p>
                  {exp.responsibilities && (
                    <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                      {exp.responsibilities.split('\n').filter(r => r.trim()).map((resp, j) => (
                        <li key={j} style={{ fontSize: '10px', color: '#475569', marginBottom: '2px' }}>{resp.trim()}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={headingStyle}>Projects</h2>
              {projects.map((proj, i) => (
                <div key={i} style={{ marginBottom: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '11.5px', fontWeight: '700', color: '#1e293b' }}>{proj.name}</h3>
                    {proj.technologies && <span style={{ fontSize: '9px', color: '#64748b', fontStyle: 'italic' }}>{proj.technologies}</span>}
                  </div>
                  {proj.description && <p style={{ fontSize: '10px', color: '#475569', marginTop: '2px' }}>{proj.description}</p>}
                  <div style={{ display: 'flex', gap: '12px', marginTop: '2px' }}>
                    {proj.github && <span style={{ fontSize: '9px', color: '#64748b' }}>GitHub: {proj.github}</span>}
                    {proj.live && <span style={{ fontSize: '9px', color: '#64748b' }}>Live: {proj.live}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column (narrower) */}
        <div style={{ flex: '1', borderLeft: '1px solid #e2e8f0', paddingLeft: '20px' }}>
          {/* Education */}
          {education.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={headingStyle}>Education</h2>
              {education.map((edu, i) => (
                <div key={i} style={{ marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '11px', fontWeight: '700', color: '#1e293b' }}>{edu.degree}</h3>
                  <p style={{ fontSize: '10px', color: '#475569' }}>{edu.institution}</p>
                  <p style={{ fontSize: '9.5px', color: '#64748b' }}>{edu.startYear} – {edu.endYear}</p>
                  {edu.cgpa && <p style={{ fontSize: '9.5px', color: '#475569', fontWeight: '500' }}>CGPA: {edu.cgpa}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Technical Skills */}
          {techSkills.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={headingStyle}>Technical Skills</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {techSkills.map((skill, i) => (
                  <li key={i} style={{ fontSize: '10px', color: '#475569', paddingLeft: '12px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>▪</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Soft Skills */}
          {softSkills.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={headingStyle}>Soft Skills</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {softSkills.map((skill, i) => (
                  <li key={i} style={{ fontSize: '10px', color: '#475569', paddingLeft: '12px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>▪</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {certifications.filter(c => c.trim()).length > 0 && (
            <div style={sectionStyle}>
              <h2 style={headingStyle}>Certifications</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {certifications.filter(c => c.trim()).map((cert, i) => (
                  <li key={i} style={{ fontSize: '10px', color: '#475569', paddingLeft: '12px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>▪</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Achievements */}
          {achievements.filter(a => a.trim()).length > 0 && (
            <div style={sectionStyle}>
              <h2 style={headingStyle}>Achievements</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {achievements.filter(a => a.trim()).map((achievement, i) => (
                  <li key={i} style={{ fontSize: '10px', color: '#475569', paddingLeft: '12px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>★</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
