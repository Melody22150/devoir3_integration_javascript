// === Sélection de tous les articles ===
const articles = document.querySelectorAll('.article');

articles.forEach(article => {
  const articleId = article.classList[1]; // ex : "article1"

  // Vérifie si l'article est marqué comme lu dans localStorage
  if (localStorage.getItem(articleId) === 'lu') {
    // ✅ Évite les doublons d'indicateurs
    if (!article.querySelector('.lu-indicator')) {
      const indicator = document.createElement('span');
      indicator.textContent = '📘 Article lu';
      indicator.classList.add('lu-indicator');
      article.querySelector('.article-text').appendChild(indicator);
    }
  }
});

// === Quand on clique sur "Lire la suite" ===
const lireBtns = document.querySelectorAll('.article-button');

lireBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    const article = this.closest('.article');
    if (article) {
      const articleId = article.classList[1];
      localStorage.setItem(articleId, 'lu');

      // Si pas encore affiché, ajoute l’indicateur
      if (!article.querySelector('.lu-indicator')) {
        const indicator = document.createElement('span');
        indicator.textContent = '📘 Article lu';
        indicator.classList.add('lu-indicator');
        article.querySelector('.article-text').appendChild(indicator);
      } else {
        // Sinon, s'assurer qu'il est visible
        article.querySelector('.lu-indicator').style.display = 'inline';
      }
    }
  });
});

// === Boutons MASQUER / AFFICHER ===
const btnMasquer = document.getElementById('masquer-lus');
const btnAfficher = document.getElementById('afficher-tous');

btnMasquer.addEventListener('click', () => {
  document.querySelectorAll('.article').forEach(article => {
    const articleId = article.classList[1];
    if (localStorage.getItem(articleId) === 'lu') {
      article.style.display = 'none';
    }
  });
});

btnAfficher.addEventListener('click', () => {
  document.querySelectorAll('.article').forEach(article => {
    article.style.display = 'flex';
  });
});

// Liste déroulante
document.addEventListener("DOMContentLoaded", () => {
  const selectCategorie = document.getElementById('categorie-select');
  const articles = document.querySelectorAll('.article');

  selectCategorie.addEventListener('change', () => {
    const selected = selectCategorie.value;

    articles.forEach(article => {
      if (selected === 'toutes' || article.classList.contains(selected)) {
        article.style.display = 'flex';
      } else {
        article.style.display = 'none';
      }
    });
  });
});

