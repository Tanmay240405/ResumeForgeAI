import { FolderKanban, Plus, Trash2, Code2, ExternalLink } from 'lucide-react'

export default function Projects({ data, addProject, updateProject, removeProject }) {
  return (
    <div className="animate-fade-in-up space-y-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
            <FolderKanban className="w-5 h-5 text-surface-900" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-surface-900">Projects</h2>
            <p className="text-sm text-surface-500">Showcase your best work</p>
          </div>
        </div>
        <button onClick={addProject} className="btn-primary text-xs px-3 py-2">
          <Plus className="w-3.5 h-3.5" /> Add
        </button>
      </div>

      {data.projects.length === 0 && (
        <div className="text-center py-10 border border-dashed border-slate-700 rounded-xl">
          <FolderKanban className="w-10 h-10 text-surface-400 mx-auto mb-3" />
          <p className="text-sm text-surface-400">No projects yet. Click &quot;Add&quot; to get started.</p>
        </div>
      )}

      <div className="space-y-4">
        {data.projects.map((proj, index) => (
          <div key={index} className="glass-light rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-violet-300">Project #{index + 1}</span>
              <button
                onClick={() => removeProject(index)}
                className="p-1.5 rounded-lg text-surface-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="sm:col-span-2">
                <label className="form-label">Project Name</label>
                <input
                  type="text"
                  value={proj.name}
                  onChange={(e) => updateProject(index, 'name', e.target.value)}
                  placeholder="e.g. E-Commerce Platform"
                  className="form-input"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="form-label">Description</label>
                <textarea
                  value={proj.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  placeholder="Describe what the project does and your role..."
                  rows={3}
                  className="form-input resize-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="form-label">Technologies Used</label>
                <input
                  type="text"
                  value={proj.technologies}
                  onChange={(e) => updateProject(index, 'technologies', e.target.value)}
                  placeholder="e.g. React, Node.js, MongoDB, Tailwind CSS"
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label flex items-center gap-1">
                  <Code2 className="w-3 h-3" /> GitHub Link
                </label>
                <input
                  type="url"
                  value={proj.github}
                  onChange={(e) => updateProject(index, 'github', e.target.value)}
                  placeholder="https://github.com/..."
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> Live Link
                </label>
                <input
                  type="url"
                  value={proj.live}
                  onChange={(e) => updateProject(index, 'live', e.target.value)}
                  placeholder="https://..."
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
