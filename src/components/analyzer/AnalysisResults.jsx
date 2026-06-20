import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts'
import { CheckCircle2, AlertTriangle, Lightbulb, Target, TrendingUp, XCircle } from 'lucide-react'
import ScoreCard from './ScoreCard'

const COLORS = ['#6366f1', '#818cf8', '#a78bfa', '#c084fc', '#e879f9']

export default function AnalysisResults({ results }) {
  if (!results) return null

  const radarData = Object.entries(results.categoryScores).map(([key, value]) => ({
    category: key,
    score: value,
    fullMark: 100,
  }))

  const barData = Object.entries(results.categoryScores).map(([key, value]) => ({
    name: key,
    score: value,
  }))

  return (
    <div className="animate-fade-in-up space-y-6">
      {/* Score Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ScoreCard
          label="Resume Match Score"
          score={results.matchScore}
          subtitle={`${results.matchedKeywordCount} of ${results.totalKeywordCount} keywords matched`}
          color="indigo"
        />
        <ScoreCard
          label="ATS Compatibility"
          score={results.atsScore}
          subtitle="Based on structural parsing and format checks"
          color="emerald"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Radar Chart */}
        <div className="card p-5">
          <h3 className="text-sm font-semibold text-surface-900 mb-4 flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-400" />
            Category Breakdown
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: '#475569', fontSize: 9 }}
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.25}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="card p-5">
          <h3 className="text-sm font-semibold text-surface-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            Skill Gap Analysis
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} />
                <YAxis dataKey="name" type="category" tick={{ fill: '#94a3b8', fontSize: 10 }} width={100} />
                <Tooltip
                  contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', fontSize: '12px' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Bar dataKey="score" radius={[0, 6, 6, 0]}>
                  {barData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Missing Keywords */}
      {results.missingKeywords.length > 0 && (
        <div className="card p-5">
          <h3 className="text-sm font-semibold text-surface-900 mb-3 flex items-center gap-2">
            <XCircle className="w-4 h-4 text-red-400" />
            Missing Keywords
          </h3>
          <div className="flex flex-wrap gap-2">
            {results.missingKeywords.map((kw, i) => (
              <span key={i} className="tag tag-danger">{kw}</span>
            ))}
          </div>
        </div>
      )}

      {/* Recommended Skills */}
      {results.recommendedSkills.length > 0 && (
        <div className="card p-5">
          <h3 className="text-sm font-semibold text-surface-900 mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            Recommended Skills to Add
          </h3>
          <div className="flex flex-wrap gap-2">
            {results.recommendedSkills.map((skill, i) => (
              <span key={i} className="tag tag-warning">{skill}</span>
            ))}
          </div>
        </div>
      )}

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card p-5">
          <h3 className="text-sm font-semibold text-surface-900 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Resume Strengths
          </h3>
          <ul className="space-y-2.5">
            {results.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-surface-600">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold text-surface-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Resume Weaknesses
          </h3>
          <ul className="space-y-2.5">
            {results.weaknesses.map((w, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-surface-600">
                <span className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                </span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Suggestions */}
      <div className="card p-5">
        <h3 className="text-sm font-semibold text-surface-900 mb-4 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-indigo-400" />
          Suggestions for Improvement
        </h3>
        <ol className="space-y-3">
          {results.suggestions.map((suggestion, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-surface-600">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/15 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">
                {i + 1}
              </span>
              {suggestion}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
