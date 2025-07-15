// === Sélection de tous les articles ===
const articles = document.querySelectorAll('.article');

// Fonction de validation de l’ID d’un article (évite les caractères bizarres)
function isValidArticleId(id) {
  return /^article\d+$/.test(id); // autorise uniquement article1, article2, etc.
}

articles.forEach(article => {
  const articleId = article.classList[1];

  if (isValidArticleId(articleId) && localStorage.getItem(articleId) === 'lu') {
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
      if (isValidArticleId(articleId)) {
        localStorage.setItem(articleId, 'lu');

        if (!article.querySelector('.lu-indicator')) {
          const indicator = document.createElement('span');
          indicator.textContent = '📘 Article lu';
          indicator.classList.add('lu-indicator');
          article.querySelector('.article-text').appendChild(indicator);
        } else {
          article.querySelector('.lu-indicator').style.display = 'inline';
        }
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
    if (isValidArticleId(articleId) && localStorage.getItem(articleId) === 'lu') {
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

  // TESTS

  console.log("Script de la page articles chargé.");

  // Articles déjà lus
  articles.forEach(article => {
    const articleId = article.classList[1];
    if (isValidArticleId(articleId) && localStorage.getItem(articleId) === 'lu') {
      console.log(`Article ${articleId} est marqué comme lu`);
    }
  });

  // Clic sur Lire la suite
  lireBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const article = this.closest('.article');
      if (article) {
        const articleId = article.classList[1];
        if (isValidArticleId(articleId)) {
          console.log(`Article ${articleId} a été lu`);
        }
      }
    });
  });

  // Bouton Masquer
  btnMasquer.addEventListener('click', () => {
    console.log("Bouton 'Masquer les articles lus' cliqué.");
  });

  // Bouton Afficher
  btnAfficher.addEventListener('click', () => {
    console.log("Bouton 'Afficher tous les articles' cliqué.");
  });

  // Sélection d'une catégorie
  selectCategorie.addEventListener('change', () => {
    console.log("Catégorie sélectionnée :", selectCategorie.value);
  });
});
