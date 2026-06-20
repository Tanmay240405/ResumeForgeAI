# ResumeForge AI 🚀

A modern, production-ready web application for building professional resumes and analyzing them with ATS-compatible scoring — all client-side, no paid API keys needed.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 📝 Resume Builder
- **Multi-step form** with 7 sections: Personal Info, Education, Skills, Experience, Projects, Certifications, Achievements
- **3 Professional Templates**: Modern (sidebar layout), Professional (two-column), Minimal (single column)
- **Live Preview** — see your resume update in real-time as you type
- **PDF Export** — download your resume as a high-quality PDF
- **Print Support** — print directly from the browser
- **Auto-Save** — all data persists in localStorage
- **Add Multiple Entries** — for education, experience, projects, certifications, and achievements

### 📊 Resume Analyzer
- **PDF Upload** — drag-and-drop or click to upload your resume
- **Job Description Comparison** — paste any JD to compare against
- **ATS Compatibility Score** — weighted analysis across 5 categories
- **Resume Match Score** — keyword and skill matching
- **Missing Keywords** — see what's missing from your resume
- **Recommended Skills** — skills to add for better matching
- **Strengths & Weaknesses** — detailed analysis
- **Suggestions** — actionable improvement recommendations
- **Visual Dashboard** — radar charts, bar charts, score cards

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 4 | Styling |
| React Router | Client-side routing |
| pdfjs-dist | PDF text extraction |
| html2pdf.js | Resume PDF export |
| Recharts | Dashboard charts |
| Lucide React | Icons |
| localStorage | Data persistence |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/resumeforge-ai.git
cd resumeforge-ai

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` directory.

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Vite — just click Deploy!

The included `vercel.json` handles SPA routing automatically.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, Layout
│   ├── landing/         # Landing page
│   ├── builder/         # Resume builder
│   │   ├── steps/       # Form steps (7 sections)
│   │   └── templates/   # 3 resume templates
│   └── analyzer/        # Resume analyzer
├── hooks/               # Custom React hooks
├── utils/               # Utilities (ATS scoring, PDF export/parse)
├── App.jsx              # Router setup
├── index.css            # Tailwind + custom styles
└── main.jsx             # Entry point
```

## 🎨 Design

- **SaaS-style** dark theme with glassmorphism effects
- **Indigo/Violet** primary palette with emerald accents
- **Inter** font family from Google Fonts
- **Fully responsive** — mobile, tablet, desktop
- **Smooth animations** — fade-in, slide, hover effects

## 👤 Author

**Tanmay Saxena**  
📧 tanmaysaxena2404@gmail.com

---

Built for [Digital Heroes](https://digitalheroesco.com) ✨
