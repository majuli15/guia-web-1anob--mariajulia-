// Alternância de tema claro/escuro com armazenamento da preferência
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Carrega preferência do usuário
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

// Alterna tema ao clicar no botão
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
