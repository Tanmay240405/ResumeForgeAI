export default function MinimalTemplate({ data }) {
  const { personal, education, skills, experience, projects, certifications, achievements } = data
  const techSkills = skills.technical ? skills.technical.split(',').map(s => s.trim()).filter(Boolean) : []
  const softSkills = skills.soft ? skills.soft.split(',').map(s => s.trim()).filter(Boolean) : []

  const sectionHeading = {
    fontSize: '11px',
    fontWeight: '600',
    color: '#374151',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    marginBottom: '10px',
    paddingBottom: '6px',
    borderBottom: '1px solid #d1d5db',
  }

  return (
    <div className="resume-template" style={{ width: '210mm', minHeight: '297mm', fontSize: '10.5px', lineHeight: '1.6', padding: '40px 44px', background: 'white', color: '#374151' }}>
      {/* Header - Minimal */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '300', color: '#111827', margin: '0 0 8px', letterSpacing: '4px' }}>
          {personal.fullName || 'Your Name'}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '10px', color: '#6b7280' }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>· {personal.phone}</span>}
          {personal.linkedin && <span>· {personal.linkedin}</span>}
          {personal.github && <span>· {personal.github}</span>}
          {personal.portfolio && <span>· {personal.portfolio}</span>}
        </div>
      </div>

      {/* Summary */}
      {personal.summary && (
        <div style={{ marginBottom: '24px' }}>
          <h2 style={sectionHeading}>About</h2>
          <p style={{ fontSize: '10.5px', color: '#4b5563', lineHeight: '1.7' }}>{personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <h2 style={sectionHeading}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#1f2937' }}>{exp.role}</span>
                <span style={{ fontSize: '9.5px', color: '#9ca3af' }}>{exp.duration}</span>
              </div>
              <p style={{ fontSize: '10px', color: '#6b7280', marginBottom: '4px' }}>{exp.company}</p>
              {exp.responsibilities && (
                <ul style={{ margin: 0, paddingLeft: '16px' }}>
                  {exp.responsibilities.split('\n').filter(r => r.trim()).map((resp, j) => (
                    <li key={j} style={{ fontSize: '10px', color: '#4b5563', marginBottom: '2px' }}>{resp.trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <h2 style={sectionHeading}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#1f2937' }}>{edu.degree}</span>
                <span style={{ fontSize: '9.5px', color: '#9ca3af' }}>{edu.startYear} – {edu.endYear}</span>
              </div>
              <p style={{ fontSize: '10px', color: '#6b7280' }}>{edu.institution}{edu.cgpa ? ` — ${edu.cgpa}` : ''}</p>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <h2 style={sectionHeading}>Projects</h2>
          {projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#1f2937' }}>{proj.name}</span>
              {proj.technologies && <span style={{ fontSize: '9.5px', color: '#9ca3af', marginLeft: '8px' }}>({proj.technologies})</span>}
              {proj.description && <p style={{ fontSize: '10px', color: '#4b5563', margin: '2px 0' }}>{proj.description}</p>}
              <div style={{ display: 'flex', gap: '12px' }}>
                {proj.github && <span style={{ fontSize: '9px', color: '#9ca3af' }}>{proj.github}</span>}
                {proj.live && <span style={{ fontSize: '9px', color: '#9ca3af' }}>{proj.live}</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(techSkills.length > 0 || softSkills.length > 0) && (
        <div style={{ marginBottom: '24px' }}>
          <h2 style={sectionHeading}>Skills</h2>
          {techSkills.length > 0 && (
            <p style={{ fontSize: '10px', color: '#4b5563', marginBottom: '4px' }}>
              <span style={{ fontWeight: '600', color: '#374151' }}>Technical:</span> {techSkills.join(' · ')}
            </p>
          )}
          {softSkills.length > 0 && (
            <p style={{ fontSize: '10px', color: '#4b5563' }}>
              <span style={{ fontWeight: '600', color: '#374151' }}>Soft Skills:</span> {softSkills.join(' · ')}
            </p>
          )}
        </div>
      )}

      {/* Certifications */}
      {certifications.filter(c => c.trim()).length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <h2 style={sectionHeading}>Certifications</h2>
          {certifications.filter(c => c.trim()).map((cert, i) => (
            <p key={i} style={{ fontSize: '10px', color: '#4b5563', marginBottom: '2px' }}>— {cert}</p>
          ))}
        </div>
      )}

      {/* Achievements */}
      {achievements.filter(a => a.trim()).length > 0 && (
        <div>
          <h2 style={sectionHeading}>Achievements</h2>
          {achievements.filter(a => a.trim()).map((achievement, i) => (
            <p key={i} style={{ fontSize: '10px', color: '#4b5563', marginBottom: '2px' }}>— {achievement}</p>
          ))}
        </div>
      )}
    </div>
  )
}
