import { Download, Printer, LayoutTemplate } from 'lucide-react'
import ModernTemplate from './templates/ModernTemplate'
import ProfessionalTemplate from './templates/ProfessionalTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import { exportToPdf, printResume } from '../../utils/pdfExport'
import { useState } from 'react'

const templates = [
  { id: 'modern', label: 'Modern', color: 'from-accent-500 to-accent-600' },
  { id: 'professional', label: 'Professional', color: 'from-slate-600 to-slate-800' },
  { id: 'minimal', label: 'Minimal', color: 'from-gray-400 to-gray-600' },
]

export default function ResumePreview({ data, selectedTemplate, setTemplate }) {
  const [exporting, setExporting] = useState(false)

  const handleExport = async () => {
    setExporting(true)
    try {
      const filename = `${data.personal.fullName || 'resume'}_resume.pdf`
      await exportToPdf('resume-preview', filename)
    } catch (err) {
      console.error('PDF export failed:', err)
    } finally {
      setExporting(false)
    }
  }

  const handlePrint = () => {
    printResume('resume-preview')
  }

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'professional':
        return <ProfessionalTemplate data={data} />
      case 'minimal':
        return <MinimalTemplate data={data} />
      default:
        return <ModernTemplate data={data} />
    }
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Template Selector */}
        <div className="flex items-center gap-2">
          <LayoutTemplate className="w-4 h-4 text-surface-500" />
          <div className="flex gap-1.5">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => setTemplate(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  selectedTemplate === t.id
                    ? `bg-gradient-to-r ${t.color} text-white shadow-lg`
                    : 'bg-surface-200 text-surface-500 hover:bg-surface-300 hover:text-surface-600'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button onClick={handlePrint} className="btn-secondary text-xs px-3 py-2">
            <Printer className="w-3.5 h-3.5" /> Print
          </button>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="btn-primary text-xs px-3 py-2"
          >
            <Download className="w-3.5 h-3.5" />
            {exporting ? 'Exporting...' : 'Download PDF'}
          </button>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="relative overflow-auto rounded-xl border border-surface-200 bg-slate-900/50 p-4">
        <div
          id="resume-preview"
          className="mx-auto shadow-2xl"
          style={{ transformOrigin: 'top center', maxWidth: '210mm' }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  )
}
