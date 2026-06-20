import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'resumeforge-data'

const defaultData = {
  personal: {
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    portfolio: '',
    summary: '',
  },
  education: [],
  skills: {
    technical: '',
    soft: '',
  },
  experience: [],
  projects: [],
  certifications: [''],
  achievements: [''],
  selectedTemplate: 'modern',
}

export default function useResumeData() {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        return { ...defaultData, ...parsed }
      }
    } catch (e) {
      console.warn('Failed to load saved resume data:', e)
    }
    return defaultData
  })

  // Auto-save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (e) {
      console.warn('Failed to save resume data:', e)
    }
  }, [data])

  const updatePersonal = useCallback((field, value) => {
    setData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }, [])

  const updateSkills = useCallback((field, value) => {
    setData(prev => ({
      ...prev,
      skills: { ...prev.skills, [field]: value },
    }))
  }, [])

  const addEducation = useCallback(() => {
    setData(prev => ({
      ...prev,
      education: [...prev.education, { degree: '', institution: '', startYear: '', endYear: '', cgpa: '' }],
    }))
  }, [])

  const updateEducation = useCallback((index, field, value) => {
    setData(prev => ({
      ...prev,
      education: prev.education.map((item, i) => i === index ? { ...item, [field]: value } : item),
    }))
  }, [])

  const removeEducation = useCallback((index) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }))
  }, [])

  const addExperience = useCallback(() => {
    setData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', role: '', duration: '', responsibilities: '' }],
    }))
  }, [])

  const updateExperience = useCallback((index, field, value) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.map((item, i) => i === index ? { ...item, [field]: value } : item),
    }))
  }, [])

  const removeExperience = useCallback((index) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }))
  }, [])

  const addProject = useCallback(() => {
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, { name: '', description: '', technologies: '', github: '', live: '' }],
    }))
  }, [])

  const updateProject = useCallback((index, field, value) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map((item, i) => i === index ? { ...item, [field]: value } : item),
    }))
  }, [])

  const removeProject = useCallback((index) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }))
  }, [])

  const addCertification = useCallback(() => {
    setData(prev => ({
      ...prev,
      certifications: [...prev.certifications, ''],
    }))
  }, [])

  const updateCertification = useCallback((index, value) => {
    setData(prev => ({
      ...prev,
      certifications: prev.certifications.map((item, i) => i === index ? value : item),
    }))
  }, [])

  const removeCertification = useCallback((index) => {
    setData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index),
    }))
  }, [])

  const addAchievement = useCallback(() => {
    setData(prev => ({
      ...prev,
      achievements: [...prev.achievements, ''],
    }))
  }, [])

  const updateAchievement = useCallback((index, value) => {
    setData(prev => ({
      ...prev,
      achievements: prev.achievements.map((item, i) => i === index ? value : item),
    }))
  }, [])

  const removeAchievement = useCallback((index) => {
    setData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index),
    }))
  }, [])

  const setTemplate = useCallback((template) => {
    setData(prev => ({ ...prev, selectedTemplate: template }))
  }, [])

  const resetData = useCallback(() => {
    setData(defaultData)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  return {
    data,
    updatePersonal,
    updateSkills,
    addEducation, updateEducation, removeEducation,
    addExperience, updateExperience, removeExperience,
    addProject, updateProject, removeProject,
    addCertification, updateCertification, removeCertification,
    addAchievement, updateAchievement, removeAchievement,
    setTemplate,
    resetData,
  }
}
