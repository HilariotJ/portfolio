/* =========================
   Gestion des modals
========================= */

let activeModal = null;

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');

  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';

  // cacher le menu (sidebar)
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.add('hidden');

  activeModal = id;

  // Ajouter un état à l’historique (bouton retour mobile)
  history.pushState({ modal: id }, '', '#modal');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');

  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';

  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.remove('hidden');

  activeModal = null;

  // Nettoyer l’historique si nécessaire
  if (location.hash === '#modal') {
    history.back();
  }
}

/* =========================
   Clic en dehors du modal
========================= */

window.addEventListener('click', function (event) {
  if (!activeModal) return;

  const modal = document.getElementById(activeModal);
  if (event.target === modal) {
    closeModal(activeModal);
  }
});

/* =========================
   Bouton RETOUR (mobile)
========================= */

window.addEventListener('popstate', function () {
  if (activeModal) {
    const modal = document.getElementById(activeModal);
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');

    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';

    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.classList.remove('hidden');

    activeModal = null;
  }
});

/* =========================
   Télécharger le CV
========================= */

function downloadCV() {
  const link = document.createElement('a');
  link.href = 'fichiers/CV_Hilariot.pdf';
  link.download = 'CV_Hilariot.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
