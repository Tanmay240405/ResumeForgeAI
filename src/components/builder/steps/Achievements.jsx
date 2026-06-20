import { Trophy, Plus, Trash2 } from 'lucide-react'

export default function Achievements({ data, addAchievement, updateAchievement, removeAchievement }) {
  return (
    <div className="animate-fade-in-up space-y-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-surface-900" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-surface-900">Achievements</h2>
            <p className="text-sm text-surface-500">Awards, honors, and notable accomplishments</p>
          </div>
        </div>
        <button onClick={addAchievement} className="btn-primary text-xs px-3 py-2">
          <Plus className="w-3.5 h-3.5" /> Add
        </button>
      </div>

      {data.achievements.filter(a => a !== '').length === 0 && data.achievements.length <= 1 && (
        <div className="text-center py-10 border border-dashed border-slate-700 rounded-xl">
          <Trophy className="w-10 h-10 text-surface-400 mx-auto mb-3" />
          <p className="text-sm text-surface-400">Add your achievements below</p>
        </div>
      )}

      <div className="space-y-3">
        {data.achievements.map((achievement, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xs text-surface-400 font-medium w-6 text-right">{index + 1}.</span>
            <input
              type="text"
              value={achievement}
              onChange={(e) => updateAchievement(index, e.target.value)}
              placeholder="e.g. Winner of National Hackathon 2023"
              className="form-input flex-1"
            />
            {data.achievements.length > 1 && (
              <button
                onClick={() => removeAchievement(index)}
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
