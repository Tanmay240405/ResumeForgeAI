import { useState } from 'react'
import { ChevronLeft, ChevronRight, Eye, EyeOff, RotateCcw } from 'lucide-react'
import useResumeData from '../../hooks/useResumeData'
import FormSteps, { steps } from './FormSteps'
import ResumePreview from './ResumePreview'
import PersonalInfo from './steps/PersonalInfo'
import Education from './steps/Education'
import Skills from './steps/Skills'
import Experience from './steps/Experience'
import Projects from './steps/Projects'
import Certifications from './steps/Certifications'
import Achievements from './steps/Achievements'

export default function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showPreview, setShowPreview] = useState(false)
  const resumeData = useResumeData()
  const { data, setTemplate, resetData } = resumeData

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <PersonalInfo data={data} updatePersonal={resumeData.updatePersonal} />
      case 1: return <Education data={data} addEducation={resumeData.addEducation} updateEducation={resumeData.updateEducation} removeEducation={resumeData.removeEducation} />
      case 2: return <Skills data={data} updateSkills={resumeData.updateSkills} />
      case 3: return <Experience data={data} addExperience={resumeData.addExperience} updateExperience={resumeData.updateExperience} removeExperience={resumeData.removeExperience} />
      case 4: return <Projects data={data} addProject={resumeData.addProject} updateProject={resumeData.updateProject} removeProject={resumeData.removeProject} />
      case 5: return <Certifications data={data} addCertification={resumeData.addCertification} updateCertification={resumeData.updateCertification} removeCertification={resumeData.removeCertification} />
      case 6: return <Achievements data={data} addAchievement={resumeData.addAchievement} updateAchievement={resumeData.updateAchievement} removeAchievement={resumeData.removeAchievement} />
      default: return null
    }
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">Resume Builder</h1>
            <p className="text-sm text-surface-500 mt-1">Fill in your details and see a live preview</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="lg:hidden btn-secondary text-xs px-3 py-2"
            >
              {showPreview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showPreview ? 'Form' : 'Preview'}
            </button>
            <button
              onClick={() => { if (confirm('Reset all data? This cannot be undone.')) resetData() }}
              className="btn-secondary text-xs px-3 py-2 text-red-400 hover:text-red-300"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Form Panel */}
          <div className={`lg:w-[480px] xl:w-[520px] shrink-0 ${showPreview ? 'hidden lg:block' : ''}`}>
            <div className="card p-6">
              <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
              
              <div className="min-h-[400px]">
                {renderStep()}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-5 border-t border-surface-200">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`btn-secondary text-xs px-4 py-2.5 ${currentStep === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <span className="text-xs text-surface-400">
                  {currentStep + 1} / {steps.length}
                </span>
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={currentStep === steps.length - 1}
                  className={`btn-primary text-xs px-4 py-2.5 ${currentStep === steps.length - 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className={`flex-1 min-w-0 ${!showPreview ? 'hidden lg:block' : ''}`}>
            <ResumePreview
              data={data}
              selectedTemplate={data.selectedTemplate}
              setTemplate={setTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
