import { useState } from 'react'
import { BarChart3, Sparkles, RotateCcw } from 'lucide-react'
import PdfUploader from './PdfUploader'
import JobDescInput from './JobDescInput'
import AnalysisResults from './AnalysisResults'
import { analyzeResume } from '../../utils/atsScoring'

export default function ResumeAnalyzer() {
  const [resumeText, setResumeText] = useState('')
  const [jobDesc, setJobDesc] = useState('')
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)

  const handleAnalyze = () => {
    if (!resumeText || !jobDesc) return
    setAnalyzing(true)
    // Simulate a brief delay for UX
    setTimeout(() => {
      const analysis = analyzeResume(resumeText, jobDesc)
      setResults(analysis)
      setAnalyzing(false)
    }, 800)
  }

  const handleReset = () => {
    setResumeText('')
    setJobDesc('')
    setResults(null)
  }

  const canAnalyze = resumeText.length > 20 && jobDesc.length > 20 && !isLoading

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-surface-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <BarChart3 className="w-5 h-5 text-surface-900" />
              </div>
              Resume Analyzer
            </h1>
            <p className="text-sm text-surface-500 mt-2">Upload your resume and paste a job description to get ATS scores and recommendations</p>
          </div>
          {results && (
            <button onClick={handleReset} className="btn-secondary text-xs px-3 py-2">
              <RotateCcw className="w-3.5 h-3.5" /> New Analysis
            </button>
          )}
        </div>

        {/* Input Section */}
        {!results && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card p-6">
                <PdfUploader
                  onTextExtracted={setResumeText}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </div>
              <div className="card p-6">
                <JobDescInput value={jobDesc} onChange={setJobDesc} />
              </div>
            </div>

            {/* Analyze Button */}
            <div className="text-center">
              <button
                onClick={handleAnalyze}
                disabled={!canAnalyze || analyzing}
                className={`btn-accent text-base px-10 py-3.5 rounded-2xl ${
                  !canAnalyze ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                {analyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Analyze Resume
                  </>
                )}
              </button>
              {!canAnalyze && !isLoading && (
                <p className="text-xs text-surface-400 mt-3">
                  {!resumeText ? 'Upload a resume PDF' : 'Paste a job description'} to continue
                </p>
              )}
            </div>
          </div>
        )}

        {/* Results */}
        {results && <AnalysisResults results={results} />}
      </div>
    </div>
  )
}
