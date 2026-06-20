import { Award, Plus, Trash2 } from 'lucide-react'

export default function Certifications({ data, addCertification, updateCertification, removeCertification }) {
  return (
    <div className="animate-fade-in-up space-y-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
            <Award className="w-5 h-5 text-surface-900" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-surface-900">Certifications</h2>
            <p className="text-sm text-surface-500">Professional certifications and courses</p>
          </div>
        </div>
        <button onClick={addCertification} className="btn-primary text-xs px-3 py-2">
          <Plus className="w-3.5 h-3.5" /> Add
        </button>
      </div>

      {data.certifications.filter(c => c !== '').length === 0 && data.certifications.length <= 1 && (
        <div className="text-center py-10 border border-dashed border-slate-700 rounded-xl">
          <Award className="w-10 h-10 text-surface-400 mx-auto mb-3" />
          <p className="text-sm text-surface-400">Add your certifications below</p>
        </div>
      )}

      <div className="space-y-3">
        {data.certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xs text-surface-400 font-medium w-6 text-right">{index + 1}.</span>
            <input
              type="text"
              value={cert}
              onChange={(e) => updateCertification(index, e.target.value)}
              placeholder="e.g. AWS Certified Cloud Practitioner"
              className="form-input flex-1"
            />
            {data.certifications.length > 1 && (
              <button
                onClick={() => removeCertification(index)}
                className="p-2 rounded-lg text-surface-400 hover:text-red-400 hover:bg-red-500/10 transition-colors shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
