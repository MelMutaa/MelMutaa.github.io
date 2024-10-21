// artefact.js

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.getElementById('sidebar');
  
    navToggle.addEventListener('click', function (e) {
      e.preventDefault();
      sidebar.classList.toggle('active');
    });
  });
  