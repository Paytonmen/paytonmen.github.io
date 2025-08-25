function showSection(id) {
  document.querySelectorAll('.contentsecs').forEach(sec => {
    sec.classList.add('hidden');
  });
  
  const welcome = document.getElementById('welcome');
  if (welcome) welcome.classList.add('hidden');

  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('hidden');
    history.replaceState(null, '', '#' + id);
  } else {
    console.warn('No section with id:', id);
  }
}

window.showSection = showSection;

window.addEventListener('DOMContentLoaded', () => {
  const initial = location.hash.slice(1);
  if (initial && document.getElementById(initial)) {
    showSection(initial);
  }
});
