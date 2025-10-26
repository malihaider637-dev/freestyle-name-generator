const generateBtn = document.getElementById('generateBtn');
const regenBtn = document.getElementById('regenBtn');
const copyBtn = document.getElementById('copyBtn');
const generatedName = document.getElementById('generatedName');
const keywordInput = document.getElementById('keyword');
const historyList = document.getElementById('historyList');
let history = [];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateName() {
  const keyword = keywordInput.value.trim();
  const style = document.querySelector('input[name="style"]:checked').value;

  const syllables = ['ro', 'na', 'li', 'ka', 'ven', 'ex', 'or', 'lum', 'tra', 'zo', 'phi', 'co', 'dra', 'neo', 'fy', 'lyn', 'rix'];
  const freestyleWords = ['Blaze', 'Nova', 'Chill', 'Vibe', 'Echo', 'Drip', 'Flex', 'Shadow', 'Storm', 'Haze', 'Pulse', 'Glow'];

  let name = '';

  if (style === 'unique') {
    name = 
      (keyword ? keyword.charAt(0).toUpperCase() + keyword.slice(1).toLowerCase() : getRandomElement(syllables)) +
      getRandomElement(syllables) +
      getRandomElement(['o', 'a', 'u', 'on', 'ra', 'is']);
  } else {
    name = 
      getRandomElement(freestyleWords) + 
      getRandomElement(['Zone', 'X', 'Hub', 'Crew', 'ify', 'verse', 'Nation']);
  }

  if (keyword && Math.random() > 0.5 && style === 'freestyle') {
    name = keyword.charAt(0).toUpperCase() + keyword.slice(1) + getRandomElement(['X', 'Zone', 'Lab', 'Nation']);
  }

  generatedName.textContent = name;
  updateHistory(name);
}

function updateHistory(name) {
  history.unshift(name);
  if (history.length > 5) history.pop();
  historyList.innerHTML = history.map(n => `<li>${n}</li>`).join('');
}

function copyToClipboard() {
  navigator.clipboard.writeText(generatedName.textContent);
  copyBtn.textContent = '✅ Copied!';
  setTimeout(() => (copyBtn.textContent = '📋 Copy Name'), 1500);
}

generateBtn.addEventListener('click', generateName);
regenBtn.addEventListener('click', generateName);
copyBtn.addEventListener('click', copyToClipboard);