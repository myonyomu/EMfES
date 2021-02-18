window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const toggleButtonIcons = document.querySelectorAll('.sidebar-toggle svg');
  
  toggleBtn.addEventListener('click', function() {
    toggleBtn.classList.toggle('is-closed');
    sidebar.classList.toggle('is-closed');

    toggleButtonIcons.forEach((svg) => {
      svg.classList.toggle('hidden');
    });
  })
});
