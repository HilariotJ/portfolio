function openModal(id) { document.getElementById(id).style.display = 'block'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => { if (event.target == modal) modal.style.display = 'none'; });
}
//telecharger cv
function downloadCV() {
  const link = document.createElement('a');
  link.href = 'fichiers/CV_Hilariot.pdf'; // chemin du CV
  link.download = 'fichiers/CV_Hilariot.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
