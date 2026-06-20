/* ModernTemplate uses emoji text for contact icons, no lucide imports needed */

export default function ModernTemplate({ data }) {
  const { personal, education, skills, experience, projects, certifications, achievements } = data
  const techSkills = skills.technical ? skills.technical.split(',').map(s => s.trim()).filter(Boolean) : []
  const softSkills = skills.soft ? skills.soft.split(',').map(s => s.trim()).filter(Boolean) : []

  return (
    <div className="resume-template" style={{ width: '210mm', minHeight: '297mm', fontSize: '11px', lineHeight: '1.5' }}>
      <div style={{ display: 'flex', minHeight: '297mm' }}>
        {/* Sidebar */}
        <div style={{ width: '35%', background: 'linear-gradient(180deg, #1e1b4b, #312e81)', color: 'white', padding: '28px 20px' }}>
          {/* Name */}
          <div style={{ marginBottom: '24px', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #818cf8, #6366f1)', margin: '0 auto 12px', textAlign: 'center', boxSizing: 'border-box', paddingTop: '25px', fontSize: '28px', fontWeight: '700', color: 'white', lineHeight: 1, display: 'block' }}>
              {personal.fullName ? personal.fullName.charAt(0).toUpperCase() : 'R'}
            </div>
            <h1 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 4px', color: 'white' }}>{personal.fullName || 'Your Name'}</h1>
          </div>

          {/* Contact */}
          <div style={{ marginBottom: '22px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#a5b4fc', marginBottom: '10px', borderBottom: '1px solid rgba(165, 180, 252, 0.3)', paddingBottom: '6px' }}>Contact</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '10px' }}>
              {personal.email && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#c7d2fe' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  {personal.email}
                </div>
              )}
              {personal.phone && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#c7d2fe' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {personal.phone}
                </div>
              )}
              {personal.linkedin && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#c7d2fe' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  {personal.linkedin}
                </div>
              )}
              {personal.github && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#c7d2fe' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  {personal.github}
                </div>
              )}
              {personal.portfolio && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#c7d2fe' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  {personal.portfolio}
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {techSkills.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <h2 style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#a5b4fc', marginBottom: '10px', borderBottom: '1px solid rgba(165, 180, 252, 0.3)', paddingBottom: '6px' }}>Technical Skills</h2>
              <div style={{ display: 'block' }}>
                {techSkills.map((skill, i) => (
                  <span key={i} style={{ display: 'inline-block', boxSizing: 'border-box', background: 'rgba(99, 102, 241, 0.3)', color: '#e0e7ff', paddingTop: '4px', paddingBottom: '2px', paddingLeft: '8px', paddingRight: '8px', borderRadius: '4px', fontSize: '9px', fontWeight: '500', marginRight: '4px', marginBottom: '4px', lineHeight: 1 }}>{skill}</span>
                ))}
              </div>
            </div>
          )}

          {softSkills.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <h2 style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#a5b4fc', marginBottom: '10px', borderBottom: '1px solid rgba(165, 180, 252, 0.3)', paddingBottom: '6px' }}>Soft Skills</h2>
              <div style={{ display: 'block' }}>
                {softSkills.map((skill, i) => (
                  <span key={i} style={{ display: 'inline-block', boxSizing: 'border-box', background: 'rgba(16, 185, 129, 0.25)', color: '#a7f3d0', paddingTop: '4px', paddingBottom: '2px', paddingLeft: '8px', paddingRight: '8px', borderRadius: '4px', fontSize: '9px', fontWeight: '500', marginRight: '4px', marginBottom: '4px', lineHeight: 1 }}>{skill}</span>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications.filter(c => c.trim()).length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <h2 style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#a5b4fc', marginBottom: '10px', borderBottom: '1px solid rgba(165, 180, 252, 0.3)', paddingBottom: '6px' }}>Certifications</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {certifications.filter(c => c.trim()).map((cert, i) => (
                  <li key={i} style={{ fontSize: '10px', color: '#c7d2fe', paddingLeft: '12px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#818cf8' }}>▸</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div style={{ width: '65%', padding: '28px 24px', background: 'white' }}>
          {/* Summary */}
          {personal.summary && (
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#312e81', marginBottom: '8px', borderBottom: '2px solid #6366f1', paddingBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Professional Summary</h2>
              <p style={{ fontSize: '10.5px', color: '#475569', lineHeight: '1.6' }}>{personal.summary}</p>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#312e81', marginBottom: '8px', borderBottom: '2px solid #6366f1', paddingBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Education</h2>
              {education.map((edu, i) => (
                <div key={i} style={{ marginBottom: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '11.5px', fontWeight: '600', color: '#1e293b' }}>{edu.degree}</h3>
                    <span style={{ fontSize: '9.5px', color: '#6366f1', fontWeight: '500' }}>{edu.startYear} – {edu.endYear}</span>
                  </div>
                  <p style={{ fontSize: '10.5px', color: '#64748b' }}>{edu.institution}</p>
                  {edu.cgpa && <p style={{ fontSize: '10px', color: '#818cf8', fontWeight: '500' }}>CGPA/Percentage: {edu.cgpa}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#312e81', marginBottom: '8px', borderBottom: '2px solid #6366f1', paddingBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Experience</h2>
              {experience.map((exp, i) => (
                <div key={i} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '11.5px', fontWeight: '600', color: '#1e293b' }}>{exp.role}</h3>
                    <span style={{ fontSize: '9.5px', color: '#6366f1', fontWeight: '500' }}>{exp.duration}</span>
                  </div>
                  <p style={{ fontSize: '10.5px', color: '#64748b', fontWeight: '500', marginBottom: '4px' }}>{exp.company}</p>
                  {exp.responsibilities && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {exp.responsibilities.split('\n').filter(r => r.trim()).map((resp, j) => (
                        <li key={j} style={{ fontSize: '10px', color: '#475569', paddingLeft: '12px', position: 'relative', marginBottom: '2px' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#6366f1' }}>•</span>
                          {resp.trim()}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#312e81', marginBottom: '8px', borderBottom: '2px solid #6366f1', paddingBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects</h2>
              {projects.map((proj, i) => (
                <div key={i} style={{ marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '11.5px', fontWeight: '600', color: '#1e293b' }}>{proj.name}</h3>
                  {proj.technologies && <p style={{ fontSize: '9.5px', color: '#6366f1', fontWeight: '500', marginBottom: '3px' }}>Tech: {proj.technologies}</p>}
                  {proj.description && <p style={{ fontSize: '10px', color: '#475569' }}>{proj.description}</p>}
                  <div style={{ display: 'flex', gap: '12px', marginTop: '3px' }}>
                    {proj.github && <span style={{ fontSize: '9px', color: '#818cf8' }}>GitHub: {proj.github}</span>}
                    {proj.live && <span style={{ fontSize: '9px', color: '#818cf8' }}>Live: {proj.live}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Achievements */}
          {achievements.filter(a => a.trim()).length > 0 && (
            <div>
              <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#312e81', marginBottom: '8px', borderBottom: '2px solid #6366f1', paddingBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Achievements</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {achievements.filter(a => a.trim()).map((achievement, i) => (
                  <li key={i} style={{ fontSize: '10.5px', color: '#475569', paddingLeft: '14px', position: 'relative', marginBottom: '4px' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#f59e0b' }}>★</span>
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
