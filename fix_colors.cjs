const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/analyzer',
  'src/components/builder',
  'src/components/builder/steps',
  'src/components/layout'
];

const replacements = [
  { search: /text-white/g, replace: 'text-surface-900' },
  { search: /text-slate-300/g, replace: 'text-surface-600' },
  { search: /text-slate-400/g, replace: 'text-surface-500' },
  { search: /text-slate-500/g, replace: 'text-surface-400' },
  { search: /text-slate-600/g, replace: 'text-surface-400' },
  { search: /bg-slate-800/g, replace: 'bg-surface-200' },
  { search: /bg-slate-700/g, replace: 'bg-surface-300' },
  { search: /border-slate-800/g, replace: 'border-surface-200' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      // processDirectory(fullPath); // already flat listing them above
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const { search, replace } of replacements) {
        if (search.test(content)) {
          content = content.replace(search, replace);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

directories.forEach(dir => processDirectory(path.join(__dirname, dir)));
