import { GraduationCap, Plus, Trash2 } from 'lucide-react'

export default function Education({ data, addEducation, updateEducation, removeEducation }) {
  return (
    <div className="animate-fade-in-up space-y-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-surface-900" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-surface-900">Education</h2>
            <p className="text-sm text-surface-500">Your academic background</p>
          </div>
        </div>
        <button onClick={addEducation} className="btn-primary text-xs px-3 py-2">
          <Plus className="w-3.5 h-3.5" /> Add
        </button>
      </div>

      {data.education.length === 0 && (
        <div className="text-center py-10 border border-dashed border-slate-700 rounded-xl">
          <GraduationCap className="w-10 h-10 text-surface-400 mx-auto mb-3" />
          <p className="text-sm text-surface-400">No education entries yet. Click &quot;Add&quot; to get started.</p>
        </div>
      )}

      <div className="space-y-4">
        {data.education.map((edu, index) => (
          <div key={index} className="glass-light rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-300">Education #{index + 1}</span>
              <button
                onClick={() => removeEducation(index)}
                className="p-1.5 rounded-lg text-surface-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="form-label">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                  placeholder="e.g. B.Tech in Computer Science"
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Institution</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                  placeholder="e.g. IIT Delhi"
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Start Year</label>
                <input
                  type="text"
                  value={edu.startYear}
                  onChange={(e) => updateEducation(index, 'startYear', e.target.value)}
                  placeholder="e.g. 2020"
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">End Year</label>
                <input
                  type="text"
                  value={edu.endYear}
                  onChange={(e) => updateEducation(index, 'endYear', e.target.value)}
                  placeholder="e.g. 2024"
                  className="form-input"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="form-label">CGPA / Percentage</label>
                <input
                  type="text"
                  value={edu.cgpa}
                  onChange={(e) => updateEducation(index, 'cgpa', e.target.value)}
                  placeholder="e.g. 8.5 CGPA or 85%"
                  className="form-input"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
