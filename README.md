Devoir 3 – Site Web : Les Chroniques du JDR

---

## 📖 Description du projet

**Les Chroniques du JDR** est un site vitrine présentant l’univers du jeu de rôle (JDR).  
Après le Devoir 2 (création d’une interface statique responsive), ce **Devoir 3** a consisté à **ajouter des fonctionnalités dynamiques avec JavaScript** tout en respectant des principes d’éco-conception (scripts optimisés, sans surcharge inutile).

---

## 📂 Structure du projet

- **index.html** → page d’accueil
- **articles.html** → liste des articles récents + filtres + masquage/affichage
- **article2.html** → exemple d’article détaillé
- **about.html** → page de présentation

### Assets
- `/assets/css/` → styles desktop + responsive
- `/assets/js/` → scripts dynamiques (interactions utilisateur, DOM, localStorage)
- `/assets/images/` → logos, bannières, icônes réseaux sociaux
- `/assets/fonts/` → polices Livvic & Londrina, etc...

---

## ⚙️ Fonctionnalités principales

### ✅ Fonctionnalités du Devoir 2 (base statique)
- **Header unique** : menu classique desktop + menu burger responsive (aria-expanded, fermeture ESC, clic extérieur).
- **Intro & Mini-bio** :
  - Desktop : intro + bio côte à côte.
  - Mobile : la bio est déplacée automatiquement en bas de page via JS (même HTML, pas de duplication).
- **Footer unique** :
  - 2 colonnes : gauche (logo + menu), droite (réseaux sociaux).
  - En mobile : repositionnement du menu au-dessus du logo via JS.
  - Icônes réseaux sociaux cliquables (`target="_blank"`) + accessibles (`aria-label`).
- **Responsive design** (desktop first → tablette → mobile (modification de 390px -> 420px)).
- **Accessibilité** :
  - Hiérarchie des titres (`h1 → h2`), `alt` sur images, titres cachés avec `.visually-hidden` dans les sections.
  - Contrastes vérifiés, navigation clavier, focus visible.

---

### ✅ Fonctionnalités ajoutées/modifiées pour le Devoir 3 (JavaScript)
- **Message de bienvenue personnalisé** (page d’accueil)  
  → Au premier chargement, un champ demande le prénom de l’utilisateur.  
  → Le prénom est stocké dans `localStorage` → affichage d’un message de bienvenue personnalisé, une seule fois par utilisateur.

- **Articles – lecture et suivi**  
  - Bouton *Lire la suite* → marque l’article comme **lu** (stockage dans `localStorage`).  
  - Affiche un indicateur 📘 “Article lu” en bas de l’article.

- **Boutons Masquer / Afficher**  
  - *Masquer les articles lus* → cache ceux déjà marqués.  
  - *Afficher tous* → réaffiche la liste complète.

- **Filtre par catégorie**  
  - Liste déroulante `<select>` → affiche uniquement les articles de la catégorie choisie.  
  - Option “Toutes” → réinitialise le filtre.

- **Bouton Retour en haut**  
  - Apparaît après 300px de scroll.  
  - Clique → remonte la page en défilement fluide.

- **Footer dynamique**  
  - En mobile, le menu du footer est déplacé en JavaScript pour apparaître **au-dessus du logo dans la colonne gauche**, et revient à sa place initiale en desktop.

---

## 🧪 Tests réalisés

- **Tests unitaires manuels** :
  - Message de bienvenue → affichage correct + persistance du prénom.
  - Bouton Lire la suite → indicateur bien ajouté et stocké dans `localStorage`.
  - Boutons Masquer / Afficher → comportement attendu.
  - Filtre catégories → n’affiche que les bons articles.
  - Bouton retour en haut → apparition à 300px + défilement fluide.
  - Repositionnement de la mini-bio et du menu footer selon la taille de l’écran.

- **Tests accessibilité** :
  - Vérification W3C HTML & CSS → warnings corrigés (ajout de titres cachés dans sections).
  - Audit Lighthouse → contraste, structure titres, navigation clavier.
  - Vérification des `alt` images et attributs ARIA.

- **Tests de sécurité** :
  - Validation des IDs d’articles (`/^article\d+$/`) pour éviter les clés locales non conformes.
  - Protection contre l’injection de scripts dans le champ prénom (nettoyage avant affichage).

---

## 🛠️ Technologies utilisées

- **HTML5** (structure sémantique, accessibilité)
- **CSS3** (responsive design, desktop-first)
- **JavaScript ES6** (DOM, événements, `localStorage`)
- **W3C Validators**, **Lighthouse**, **WAVE**

---

## 👩‍💻 Auteur

Projet développé par **Mélody**,  
dans le cadre du **Devoir 3 – CCP1 DWWM ENACO**.  
2025 – Tous droits réservés.
