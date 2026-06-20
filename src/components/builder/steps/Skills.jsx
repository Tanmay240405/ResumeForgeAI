import { Wrench, Brain, X } from 'lucide-react'
import { useState, useRef } from 'react'

export default function Skills({ data, updateSkills }) {
  const [techInput, setTechInput] = useState('')
  const [softInput, setSoftInput] = useState('')

  const techInputRef = useRef(null)
  const softInputRef = useRef(null)

  const handleAddSkill = (type, input, setInput) => {
    const trimmed = input.trim()
    if (!trimmed) return

    const currentSkills = data.skills[type]
      ? data.skills[type].split(',').map(s => s.trim()).filter(Boolean)
      : []

    if (!currentSkills.includes(trimmed)) {
      const newSkills = [...currentSkills, trimmed]
      updateSkills(type, newSkills.join(', '))
    }
    setInput('')
  }

  const handleRemoveSkill = (type, indexToRemove) => {
    const currentSkills = data.skills[type]
      ? data.skills[type].split(',').map(s => s.trim()).filter(Boolean)
      : []
    const newSkills = currentSkills.filter((_, i) => i !== indexToRemove)
    updateSkills(type, newSkills.join(', '))
  }

  const handleKeyDown = (e, type, input, setInput) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      handleAddSkill(type, input, setInput)
    } else if (e.key === 'Backspace' && !input) {
      const currentSkills = data.skills[type]
        ? data.skills[type].split(',').map(s => s.trim()).filter(Boolean)
        : []
      if (currentSkills.length > 0) {
        handleRemoveSkill(type, currentSkills.length - 1)
      }
    }
  }

  const techSkillsList = data.skills.technical
    ? data.skills.technical.split(',').map(s => s.trim()).filter(Boolean)
    : []

  const softSkillsList = data.skills.soft
    ? data.skills.soft.split(',').map(s => s.trim()).filter(Boolean)
    : []

  return (
    <div className="animate-fade-in-up space-y-5">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
          <Wrench className="w-5 h-5 text-surface-900" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-surface-900">Skills</h2>
          <p className="text-sm text-surface-500">Press Enter or type a comma to add a skill</p>
        </div>
      </div>

      <div>
        <label className="form-label flex items-center gap-1.5">
          <Wrench className="w-3.5 h-3.5" />
          Technical Skills
        </label>
        
        <div 
          onClick={() => techInputRef.current?.focus()}
          className="flex flex-wrap gap-1.5 p-2 bg-white border border-slate-300 rounded-[0.75rem] focus-within:border-[var(--primary-500)] focus-within:shadow-[0_0_0_3px_rgba(92,142,92,0.1)] transition-all min-h-[42px] cursor-text"
        >
          {techSkillsList.map((skill, i) => (
            <span key={i} className="tag tag-primary flex items-center gap-1">
              {skill}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveSkill('technical', i)
                }}
                className="hover:bg-[var(--primary-200)] rounded-full p-0.5 transition-colors cursor-pointer"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </span>
          ))}
          <input
            ref={techInputRef}
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, 'technical', techInput, setTechInput)}
            placeholder={techSkillsList.length === 0 ? "e.g. React, Node.js, Python, SQL..." : "Add skill..."}
            className="flex-grow min-w-[120px] bg-transparent border-none outline-none p-1 text-sm focus:ring-0 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="form-label flex items-center gap-1.5">
          <Brain className="w-3.5 h-3.5" />
          Soft Skills
        </label>

        <div 
          onClick={() => softInputRef.current?.focus()}
          className="flex flex-wrap gap-1.5 p-2 bg-white border border-slate-300 rounded-[0.75rem] focus-within:border-[var(--primary-500)] focus-within:shadow-[0_0_0_3px_rgba(92,142,92,0.1)] transition-all min-h-[42px] cursor-text"
        >
          {softSkillsList.map((skill, i) => (
            <span key={i} className="tag tag-success flex items-center gap-1">
              {skill}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveSkill('soft', i)
                }}
                className="hover:bg-[#a7f3d0] rounded-full p-0.5 transition-colors cursor-pointer"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </span>
          ))}
          <input
            ref={softInputRef}
            type="text"
            value={softInput}
            onChange={(e) => setSoftInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, 'soft', softInput, setSoftInput)}
            placeholder={softSkillsList.length === 0 ? "e.g. Communication, Leadership..." : "Add skill..."}
            className="flex-grow min-w-[120px] bg-transparent border-none outline-none p-1 text-sm focus:ring-0 focus:outline-none"
          />
        </div>
      </div>
    </div>
  )
}
