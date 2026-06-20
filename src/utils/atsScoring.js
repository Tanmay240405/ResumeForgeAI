// ===== STOP WORDS =====
const STOP_WORDS = new Set([
  'a','an','the','and','or','but','in','on','at','to','for','of','with','by',
  'from','is','are','was','were','be','been','being','have','has','had','do',
  'does','did','will','would','could','should','may','might','shall','can',
  'this','that','these','those','it','its','i','we','you','he','she','they',
  'me','him','her','us','them','my','your','his','our','their','what','which',
  'who','whom','where','when','how','not','no','nor','as','if','then','than',
  'too','very','just','about','above','after','again','all','also','am','any',
  'because','before','between','both','each','few','more','most','other','out',
  'over','own','same','so','some','such','up','s','t','don','re','ve','ll',
  'etc','ie','eg','per','via','using','used','use','work','working','worked',
])

// ===== COMMON TECH SKILLS =====
const TECH_SKILLS = [
  'javascript','typescript','python','java','c\\+\\+','c#','ruby','go','golang','rust','swift',
  'kotlin','php','scala','r','matlab','sql','nosql','html','css','sass','less',
  'react','angular','vue','svelte','next\\.js','nextjs','nuxt','gatsby',
  'node\\.js','nodejs','express','django','flask','spring','rails','laravel',
  'fastapi','nestjs','graphql','rest','api','microservices',
  'aws','azure','gcp','google cloud','docker','kubernetes','terraform','jenkins',
  'ci/cd','devops','linux','git','github','gitlab','bitbucket',
  'mongodb','postgresql','mysql','redis','elasticsearch','dynamodb','firebase','supabase',
  'machine learning','deep learning','nlp','computer vision','tensorflow','pytorch',
  'pandas','numpy','scikit-learn','data science','data analysis','data engineering',
  'figma','sketch','adobe','photoshop','illustrator',
  'agile','scrum','jira','confluence','kanban',
  'testing','jest','mocha','cypress','selenium','playwright',
  'tailwind','bootstrap','material ui','chakra',
  'webpack','vite','babel','rollup','parcel',
  'redux','zustand','mobx','context api',
  'oauth','jwt','authentication','authorization',
  'responsive','accessibility','seo','performance',
  'blockchain','web3','solidity','ethereum',
]

// ===== SOFT SKILLS =====
const SOFT_SKILLS = [
  'communication','leadership','teamwork','problem solving','critical thinking',
  'time management','adaptability','creativity','collaboration','presentation',
  'analytical','detail oriented','self motivated','proactive','mentoring',
  'negotiation','conflict resolution','decision making','strategic thinking',
  'project management','stakeholder management','cross functional',
]

// ===== ACTION VERBS =====
const ACTION_VERBS = [
  'developed','designed','implemented','built','created','managed','led','directed',
  'analyzed','optimized','improved','reduced','increased','achieved','delivered',
  'launched','deployed','architected','engineered','automated','streamlined',
  'collaborated','coordinated','mentored','trained','established','maintained',
  'resolved','integrated','migrated','refactored','scaled','contributed',
]

// ===== EDUCATION TERMS =====
const EDUCATION_LEVELS = {
  phd: 5, doctorate: 5,
  master: 4, mba: 4, 'm\\.s': 4, 'ms': 4, 'mtech': 4, 'm\\.tech': 4,
  bachelor: 3, 'b\\.s': 3, 'bs': 3, 'btech': 3, 'b\\.tech': 3, 'b\\.e': 3, 'be': 3, 'bca': 3, 'bsc': 3, 'b\\.sc': 3,
  diploma: 2,
  certificate: 1,
}

// ===== HELPER: Tokenize and normalize text =====
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#.\-/\\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 1 && !STOP_WORDS.has(word))
}

// ===== HELPER: Extract n-grams =====
function getNGrams(tokens, n) {
  const ngrams = []
  for (let i = 0; i <= tokens.length - n; i++) {
    ngrams.push(tokens.slice(i, i + n).join(' '))
  }
  return ngrams
}

// ===== HELPER: Find skill matches =====
function findSkillMatches(text, skillList) {
  const lower = text.toLowerCase()
  const matched = []
  const missing = []

  skillList.forEach(skill => {
    const pattern = new RegExp(`\\b${skill}\\b`, 'i')
    if (pattern.test(lower)) {
      matched.push(skill.replace(/\\\+/g, '+').replace(/\\\\./g, '.'))
    }
  })

  return matched
}

// ===== MAIN SCORING FUNCTION =====
export function analyzeResume(resumeText, jobDescription) {
  if (!resumeText || !jobDescription) {
    return null
  }

  const resumeLower = resumeText.toLowerCase()
  const jdLower = jobDescription.toLowerCase()

  const resumeTokens = tokenize(resumeText)
  const jdTokens = tokenize(jobDescription)

  // Get unique JD keywords (unigrams + bigrams)
  const jdUnigrams = [...new Set(jdTokens)]
  const jdBigrams = [...new Set(getNGrams(jdTokens, 2))]
  const jdKeywords = [...new Set([...jdUnigrams, ...jdBigrams])]

  const resumeUnigrams = new Set(resumeTokens)
  const resumeBigrams = new Set(getNGrams(resumeTokens, 2))
  const resumeKeywordSet = new Set([...resumeUnigrams, ...resumeBigrams])

  // 1. KEYWORD MATCH SCORE (40% weight)
  const matchedKeywords = jdKeywords.filter(kw => resumeKeywordSet.has(kw))
  const missingKeywords = jdUnigrams
    .filter(kw => !resumeUnigrams.has(kw) && kw.length > 3)
    .slice(0, 20)
  const keywordScore = jdKeywords.length > 0
    ? Math.min(100, (matchedKeywords.length / jdKeywords.length) * 100 * 1.5)
    : 50

  // 2. SKILL MATCH SCORE (25% weight)
  const jdTechSkills = findSkillMatches(jobDescription, TECH_SKILLS)
  const resumeTechSkills = findSkillMatches(resumeText, TECH_SKILLS)
  const jdSoftSkills = findSkillMatches(jobDescription, SOFT_SKILLS)
  const resumeSoftSkills = findSkillMatches(resumeText, SOFT_SKILLS)

  const matchedTechSkills = jdTechSkills.filter(s => resumeTechSkills.includes(s))
  const missingTechSkills = jdTechSkills.filter(s => !resumeTechSkills.includes(s))
  const matchedSoftSkills = jdSoftSkills.filter(s => resumeSoftSkills.includes(s))

  const totalJdSkills = jdTechSkills.length + jdSoftSkills.length
  const totalMatchedSkills = matchedTechSkills.length + matchedSoftSkills.length
  const skillScore = totalJdSkills > 0
    ? Math.min(100, (totalMatchedSkills / totalJdSkills) * 100 * 1.3)
    : 50

  // 3. EDUCATION RELEVANCE (10% weight)
  let educationScore = 30 // base
  let resumeEduLevel = 0
  let jdEduLevel = 0

  Object.entries(EDUCATION_LEVELS).forEach(([term, level]) => {
    const pattern = new RegExp(`\\b${term}\\b`, 'i')
    if (pattern.test(resumeLower) && level > resumeEduLevel) resumeEduLevel = level
    if (pattern.test(jdLower) && level > jdEduLevel) jdEduLevel = level
  })

  if (resumeEduLevel > 0) {
    educationScore = jdEduLevel > 0
      ? Math.min(100, (resumeEduLevel / jdEduLevel) * 80 + 20)
      : 70
  }

  // 4. EXPERIENCE RELEVANCE (15% weight)
  const resumeActionVerbs = ACTION_VERBS.filter(v => new RegExp(`\\b${v}\\b`, 'i').test(resumeLower))
  const yearsPattern = /(\d+)\+?\s*(?:years?|yrs?)/gi
  const resumeYears = [...resumeLower.matchAll(yearsPattern)].map(m => parseInt(m[1]))
  const jdYears = [...jdLower.matchAll(yearsPattern)].map(m => parseInt(m[1]))

  let experienceScore = 40 // base
  if (resumeActionVerbs.length > 5) experienceScore += 20
  if (resumeActionVerbs.length > 10) experienceScore += 15
  if (resumeYears.length > 0 && jdYears.length > 0) {
    const maxResumeYears = Math.max(...resumeYears)
    const requiredYears = Math.min(...jdYears)
    if (maxResumeYears >= requiredYears) experienceScore += 25
    else experienceScore += (maxResumeYears / requiredYears) * 20
  } else if (resumeYears.length > 0) {
    experienceScore += 15
  }
  experienceScore = Math.min(100, experienceScore)

  // 5. PROJECT RELEVANCE (10% weight)
  const projectKeywords = ['project', 'built', 'developed', 'created', 'implemented', 'deployed', 'github', 'demo', 'live']
  const projectMentions = projectKeywords.filter(kw => resumeLower.includes(kw))
  let projectScore = Math.min(100, 30 + projectMentions.length * 10)

  // Check tech overlap in projects section
  const techOverlap = jdTechSkills.filter(s => resumeTechSkills.includes(s))
  projectScore = Math.min(100, projectScore + techOverlap.length * 5)

  // ===== WEIGHTED FINAL SCORE =====
  const matchScore = Math.round(
    keywordScore * 0.40 +
    skillScore * 0.25 +
    educationScore * 0.10 +
    experienceScore * 0.15 +
    projectScore * 0.10
  )

  // ===== ATS COMPATIBILITY SCORE =====
  let atsScore = 50
  // Check for common ATS-friendly patterns
  const atsChecks = [
    { test: resumeText.length > 300, points: 10, label: 'Sufficient content length' },
    { test: /education|academic/i.test(resumeText), points: 8, label: 'Education section present' },
    { test: /experience|work|employment/i.test(resumeText), points: 8, label: 'Experience section present' },
    { test: /skill/i.test(resumeText), points: 8, label: 'Skills section present' },
    { test: /project/i.test(resumeText), points: 5, label: 'Projects section present' },
    { test: /@.*\.(com|org|net|edu)/i.test(resumeText), points: 5, label: 'Email present' },
    { test: /\d{10}|\(\d{3}\)\s?\d{3}[-.]?\d{4}/i.test(resumeText), points: 5, label: 'Phone number present' },
    { test: resumeActionVerbs.length >= 3, points: 6, label: 'Action verbs used' },
    { test: resumeText.length < 5000, points: 5, label: 'Concise content' },
  ]

  atsChecks.forEach(({ test, points }) => {
    if (test) atsScore += points
  })
  atsScore = Math.min(100, atsScore)

  // ===== STRENGTHS =====
  const strengths = []
  if (matchedTechSkills.length > 3) strengths.push(`Strong technical skill alignment (${matchedTechSkills.length} matched skills)`)
  if (resumeActionVerbs.length > 5) strengths.push(`Good use of action verbs (${resumeActionVerbs.length} found)`)
  if (matchedKeywords.length > 10) strengths.push(`Excellent keyword coverage from job description`)
  if (resumeEduLevel >= 3) strengths.push('Relevant educational qualification present')
  if (matchedSoftSkills.length > 2) strengths.push(`Soft skills highlighted (${matchedSoftSkills.length} matched)`)
  if (projectMentions.length > 3) strengths.push('Projects section well-detailed')
  if (resumeYears.length > 0) strengths.push('Years of experience mentioned')
  if (strengths.length === 0) strengths.push('Resume has basic structure')

  // ===== WEAKNESSES =====
  const weaknesses = []
  if (missingTechSkills.length > 3) weaknesses.push(`Missing ${missingTechSkills.length} key technical skills from JD`)
  if (resumeActionVerbs.length < 3) weaknesses.push('Insufficient use of action verbs')
  if (missingKeywords.length > 10) weaknesses.push('Many JD keywords not found in resume')
  if (resumeText.length < 300) weaknesses.push('Resume content too brief')
  if (resumeText.length > 5000) weaknesses.push('Resume may be too lengthy for ATS')
  if (resumeEduLevel === 0) weaknesses.push('Education details not clearly stated')
  if (matchedSoftSkills.length === 0) weaknesses.push('No soft skills highlighted')
  if (weaknesses.length === 0) weaknesses.push('No major weaknesses detected')

  // ===== SUGGESTIONS =====
  const suggestions = []
  if (missingTechSkills.length > 0) {
    suggestions.push(`Add these skills if applicable: ${missingTechSkills.slice(0, 5).join(', ')}`)
  }
  if (missingKeywords.length > 0) {
    suggestions.push(`Include relevant keywords: ${missingKeywords.slice(0, 8).join(', ')}`)
  }
  if (resumeActionVerbs.length < 5) {
    suggestions.push('Use more action verbs like: developed, implemented, optimized, led, delivered')
  }
  if (!/@.*\.(com|org|net|edu)/i.test(resumeText)) {
    suggestions.push('Ensure your email address is clearly visible')
  }
  if (!/linkedin/i.test(resumeText)) {
    suggestions.push('Add your LinkedIn profile URL')
  }
  if (!/github/i.test(resumeText)) {
    suggestions.push('Add your GitHub profile for technical roles')
  }
  if (matchedSoftSkills.length < 2) {
    suggestions.push('Highlight soft skills like communication, leadership, and teamwork')
  }
  suggestions.push('Tailor your resume for each job application by matching job-specific keywords')

  // ===== RECOMMENDED SKILLS =====
  const recommendedSkills = [
    ...missingTechSkills.slice(0, 8),
    ...SOFT_SKILLS.filter(s => !resumeSoftSkills.includes(s) && jdSoftSkills.includes(s)).slice(0, 4),
  ]

  // ===== CATEGORY SCORES for Radar Chart =====
  const categoryScores = {
    'Keywords': Math.round(keywordScore),
    'Technical Skills': Math.round(skillScore),
    'Education': Math.round(educationScore),
    'Experience': Math.round(experienceScore),
    'Projects': Math.round(projectScore),
  }

  return {
    matchScore: Math.min(100, Math.max(0, matchScore)),
    atsScore: Math.min(100, Math.max(0, atsScore)),
    missingKeywords: missingKeywords.slice(0, 15),
    recommendedSkills: recommendedSkills.slice(0, 12),
    strengths,
    weaknesses,
    suggestions,
    categoryScores,
    matchedSkillCount: totalMatchedSkills,
    totalJdSkillCount: totalJdSkills,
    matchedKeywordCount: matchedKeywords.length,
    totalKeywordCount: jdKeywords.length,
  }
}
