// Interaksi untuk tombol "Tampilkan Lebih Banyak"
const showMoreBtn = document.getElementById('show-more-btn');
const moreExperience = document.getElementById('more-experience');

showMoreBtn.addEventListener('click', () => {
  if (moreExperience.classList.contains('hidden')) {
    moreExperience.classList.remove('hidden');
    showMoreBtn.textContent = 'Sembunyikan';
  } else {
    moreExperience.classList.add('hidden');
    showMoreBtn.textContent = 'Tampilkan Lebih Banyak';
  }
});

// Validasi form kontak (email & telepon)
const emailLink = document.querySelector('a[href^="mailto:"]');
const phoneSpan = document.querySelector('.contact span');

emailLink.addEventListener('click', (e) => {
  const email = emailLink.textContent;
  if (!email.includes('@')) {
    alert('Format email tidak valid!');
    e.preventDefault();
  }
});

phoneSpan.addEventListener('click', () => {
  const phone = phoneSpan.textContent;
  if (isNaN(phone)) {
    alert('Nomor telepon hanya boleh berisi angka!');
  }
});

// Dark mode toggle
const toggleThemeBtn = document.getElementById('toggle-theme-btn');

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleThemeBtn.textContent = 
    document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
