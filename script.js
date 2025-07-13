const materias = document.querySelectorAll('.materia');
const infoBox = document.getElementById('info-box');

materias.forEach(materia => {
  materia.addEventListener('click', () => {
    const info = materia.getAttribute('data-info');
    infoBox.textContent = info;
  });
});
