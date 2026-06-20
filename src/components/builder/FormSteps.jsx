import { User, GraduationCap, Wrench, Briefcase, FolderKanban, Award, Trophy, Check } from 'lucide-react'

const steps = [
  { label: 'Personal', icon: User },
  { label: 'Education', icon: GraduationCap },
  { label: 'Skills', icon: Wrench },
  { label: 'Experience', icon: Briefcase },
  { label: 'Projects', icon: FolderKanban },
  { label: 'Certifications', icon: Award },
  { label: 'Achievements', icon: Trophy },
]

export default function FormSteps({ currentStep, setCurrentStep }) {
  return (
    <div className="mb-8">
      {/* Desktop Steps */}
      <div className="hidden sm:flex items-center justify-between overflow-x-auto hide-scrollbar pb-4 gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = index === currentStep
          const isCompleted = index < currentStep

          return (
            <div key={index} className="flex items-center flex-shrink-0">
              <button
                onClick={() => setCurrentStep(index)}
                className={`flex flex-col items-center gap-1.5 group transition-all duration-300 ${
                  isActive ? 'scale-105' : ''
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-500 shadow-lg shadow-accent-500/30'
                      : isCompleted
                      ? 'bg-[#e8f3e8] border border-accent-300'
                      : 'bg-white border border-slate-200 group-hover:border-accent-300'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 text-accent-600" />
                  ) : (
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-accent-500'}`} />
                  )}
                </div>
                <span
                  className={`text-xs font-medium transition-colors ${
                    isActive ? 'text-accent-600' : isCompleted ? 'text-accent-500' : 'text-slate-400'
                  }`}
                >
                  {step.label}
                </span>
              </button>
              {index < steps.length - 1 && (
                <div className={`w-8 h-px mx-2 mt-[-20px] transition-colors ${
                  isCompleted ? 'bg-accent-300' : 'bg-slate-200'
                }`} />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile Steps */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-slate-600">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-accent-600 font-medium">{steps[currentStep].label}</span>
        </div>
        <div className="flex gap-1">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'bg-accent-500'
                  : index < currentStep
                  ? 'bg-[#e8f3e8]'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { steps }
