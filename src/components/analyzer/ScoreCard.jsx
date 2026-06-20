export default function ScoreCard({ label, score, subtitle, color = 'indigo' }) {
  const circumference = 2 * Math.PI * 45
  const offset = circumference - (score / 100) * circumference

  const colorMap = {
    indigo: { stroke: '#6366f1', bg: 'rgba(99, 102, 241, 0.1)', text: 'text-indigo-400' },
    emerald: { stroke: '#10b981', bg: 'rgba(16, 185, 129, 0.1)', text: 'text-emerald-400' },
    amber: { stroke: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', text: 'text-amber-400' },
    rose: { stroke: '#f43f5e', bg: 'rgba(244, 63, 94, 0.1)', text: 'text-rose-400' },
  }

  const colors = colorMap[color] || colorMap.indigo

  const getGrade = (s) => {
    if (s >= 90) return { grade: 'A+', color: 'text-emerald-400' }
    if (s >= 80) return { grade: 'A', color: 'text-emerald-400' }
    if (s >= 70) return { grade: 'B+', color: 'text-blue-400' }
    if (s >= 60) return { grade: 'B', color: 'text-blue-400' }
    if (s >= 50) return { grade: 'C', color: 'text-amber-400' }
    return { grade: 'D', color: 'text-red-400' }
  }

  const { grade, color: gradeColor } = getGrade(score)

  return (
    <div className="card p-6 flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4">
        <svg className="score-circle w-full h-full" viewBox="0 0 100 100">
          <circle className="score-circle-track" cx="50" cy="50" r="45" />
          <circle
            className="score-circle-fill"
            cx="50" cy="50" r="45"
            stroke={colors.stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-surface-900">{score}</span>
          <span className={`text-xs font-semibold ${gradeColor}`}>{grade}</span>
        </div>
      </div>
      <h3 className="text-sm font-semibold text-surface-900 mb-1">{label}</h3>
      {subtitle && <p className="text-xs text-surface-400">{subtitle}</p>}
    </div>
  )
}
