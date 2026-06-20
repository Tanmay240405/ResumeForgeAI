import { useRef, useState } from 'react'
import { Upload, FileText, X, CheckCircle2 } from 'lucide-react'

export default function PdfUploader({ onTextExtracted, isLoading, setIsLoading }) {
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')
  const [dragActive, setDragActive] = useState(false)
  const [extractedText, setExtractedText] = useState('')
  const inputRef = useRef(null)

  const handleFile = async (selectedFile) => {
    if (!selectedFile) return
    if (selectedFile.type !== 'application/pdf') {
      setError('Please upload a PDF file')
      return
    }
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError('File size must be under 10MB')
      return
    }

    setFile(selectedFile)
    setError('')
    setIsLoading(true)

    try {
      const { extractTextFromPdf } = await import('../../utils/pdfParser')
      const text = await extractTextFromPdf(selectedFile)
      if (!text || text.trim().length < 20) {
        setError('Could not extract text from this PDF. Try a text-based PDF (not scanned images).')
        setFile(null)
        setExtractedText('')
        onTextExtracted('')
      } else {
        setExtractedText(text)
        onTextExtracted(text)
      }
    } catch (err) {
      console.error('PDF parsing error:', err)
      setError('Failed to parse PDF. Please try another file.')
      setFile(null)
      setExtractedText('')
      onTextExtracted('')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    handleFile(e.dataTransfer.files[0])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      inputRef.current?.click()
    }
  }

  const removeFile = () => {
    setFile(null)
    setExtractedText('')
    onTextExtracted('')
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div>
      <label className="form-label mb-2 flex items-center gap-1.5">
        <Upload className="w-3.5 h-3.5" />
        Upload Resume (PDF)
      </label>

      {!file ? (
        <div
          className={`drop-zone ${dragActive ? 'active' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          role="button"
          tabIndex={0}
          aria-label="Upload resume PDF, drag and drop or press Enter to browse"
          onKeyDown={handleKeyDown}
        >
          <Upload className="w-10 h-10 text-surface-400 mx-auto mb-3" />
          <p className="text-sm text-surface-600 font-medium mb-1">
            Drag & drop your resume here
          </p>
          <p className="text-xs text-surface-400">or click to browse · PDF only · Max 10MB</p>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf"
            onChange={(e) => handleFile(e.target.files[0])}
            className="hidden"
            tabIndex={-1}
            aria-hidden="true"
          />
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-emerald-300">{file.name}</p>
              <p className="text-xs text-surface-400">{(file.size / 1024).toFixed(1)} KB</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <button
              onClick={removeFile}
              className="p-1.5 rounded-lg hover:bg-red-500/10 text-surface-400 hover:text-red-400 transition-colors"
              aria-label="Remove uploaded resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-400 mt-2" role="alert">{error}</p>
      )}

      {isLoading && (
        <div className="flex items-center gap-2 mt-3 text-sm text-indigo-400">
          <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          Extracting text from PDF...
        </div>
      )}

      {extractedText && (
        <div className="mt-4 animate-fade-in">
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-2">
            Extracted Text Preview
          </p>
          <div className="p-3 bg-surface-100 rounded-lg border border-surface-200 text-[10px] sm:text-xs text-surface-600 max-h-48 overflow-y-auto whitespace-pre-wrap font-mono leading-relaxed">
            {extractedText}
          </div>
        </div>
      )}
    </div>
  )
}