// script.js
document.querySelectorAll('.dropdown').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
