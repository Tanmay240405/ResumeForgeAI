import { FileText } from 'lucide-react'

export default function JobDescInput({ value, onChange }) {
  return (
    <div>
      <label className="form-label mb-2 flex items-center gap-1.5">
        <FileText className="w-3.5 h-3.5" />
        Job Description
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste the complete job description here to compare against your resume..."
        rows={10}
        className="form-input resize-none"
      />
      <div className="flex items-center justify-between mt-1.5">
        <p className="text-xs text-surface-400">Paste the full job listing for best results</p>
        <p className="text-xs text-surface-400">{value.length} characters</p>
      </div>
    </div>
  )
}
