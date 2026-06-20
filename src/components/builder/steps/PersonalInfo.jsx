import { User, Mail, Phone, Link2, Code2, Globe, FileText } from 'lucide-react'

export default function PersonalInfo({ data, updatePersonal }) {
  const fields = [
    { key: 'fullName', label: 'Full Name', icon: User, placeholder: 'e.g. Tanmay Saxena', type: 'text' },
    { key: 'email', label: 'Email', icon: Mail, placeholder: 'e.g. tanmay@example.com', type: 'email' },
    { key: 'phone', label: 'Phone Number', icon: Phone, placeholder: 'e.g. +91 9876543210', type: 'tel' },
    { key: 'linkedin', label: 'LinkedIn', icon: Link2, placeholder: 'e.g. linkedin.com/in/username', type: 'url' },
    { key: 'github', label: 'GitHub', icon: Code2, placeholder: 'e.g. github.com/username', type: 'url' },
    { key: 'portfolio', label: 'Portfolio Website', icon: Globe, placeholder: 'e.g. myportfolio.com', type: 'url' },
  ]

  return (
    <div className="animate-fade-in-up space-y-5">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <User className="w-5 h-5 text-surface-900" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-surface-900">Personal Information</h2>
          <p className="text-sm text-surface-500">Your contact details and online presence</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map(({ key, label, icon: Icon, placeholder, type }) => (
          <div key={key}>
            <label className="form-label">{label}</label>
            <div className="relative">
              <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
              <input
                type={type}
                value={data.personal[key]}
                onChange={(e) => updatePersonal(key, e.target.value)}
                placeholder={placeholder}
                className="form-input pl-10"
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <label className="form-label flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5" />
          Professional Summary
        </label>
        <textarea
          value={data.personal.summary}
          onChange={(e) => updatePersonal('summary', e.target.value)}
          placeholder="Write a brief summary highlighting your skills, experience, and career objectives..."
          rows={4}
          className="form-input resize-none"
        />
        <p className="text-xs text-surface-400 mt-1">{data.personal.summary.length}/500 characters</p>
      </div>
    </div>
  )
}
