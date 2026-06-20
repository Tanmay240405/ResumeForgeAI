import { Briefcase, Plus, Trash2 } from 'lucide-react'

export default function Experience({ data, addExperience, updateExperience, removeExperience }) {
  return (
    <div className="animate-fade-in-up space-y-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-surface-900" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-surface-900">Experience</h2>
            <p className="text-sm text-surface-500">Your work experience</p>
          </div>
        </div>
        <button onClick={addExperience} className="btn-primary text-xs px-3 py-2">
          <Plus className="w-3.5 h-3.5" /> Add
        </button>
      </div>

      {data.experience.length === 0 && (
        <div className="text-center py-10 border border-dashed border-slate-700 rounded-xl">
          <Briefcase className="w-10 h-10 text-surface-400 mx-auto mb-3" />
          <p className="text-sm text-surface-400">No experience entries yet. Click &quot;Add&quot; to get started.</p>
        </div>
      )}

      <div className="space-y-4">
        {data.experience.map((exp, index) => (
          <div key={index} className="glass-light rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-emerald-300">Experience #{index + 1}</span>
              <button
                onClick={() => removeExperience(index)}
                className="p-1.5 rounded-lg text-surface-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  placeholder="e.g. Google"
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Role</label>
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => updateExperience(index, 'role', e.target.value)}
                  placeholder="e.g. Software Engineer Intern"
                  className="form-input"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="form-label">Duration</label>
                <input
                  type="text"
                  value={exp.duration}
                  onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                  placeholder="e.g. June 2023 - August 2023"
                  className="form-input"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="form-label">Responsibilities</label>
                <textarea
                  value={exp.responsibilities}
                  onChange={(e) => updateExperience(index, 'responsibilities', e.target.value)}
                  placeholder="Describe your key responsibilities and achievements, one per line..."
                  rows={4}
                  className="form-input resize-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
