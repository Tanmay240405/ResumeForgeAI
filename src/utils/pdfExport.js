import html2pdf from 'html2pdf.js'

export async function exportToPdf(elementId, filename = 'resume.pdf') {
  const element = document.getElementById(elementId)
  if (!element) {
    throw new Error('Resume element not found')
  }

  const opt = {
    margin: 0,
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      logging: false,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
  }

  await html2pdf().set(opt).from(element).save()
}

export function printResume(elementId) {
  const element = document.getElementById(elementId)
  if (!element) return

  const printWindow = window.open('', '_blank')
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Resume</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; }
        @page { margin: 0; size: A4; }
      </style>
    </head>
    <body>${element.innerHTML}</body>
    </html>
  `)
  printWindow.document.close()
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 500)
}
