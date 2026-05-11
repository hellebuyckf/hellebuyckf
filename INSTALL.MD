# Portfolio — François Hellebuyck

Portfolio personnel, hébergé sur **GitHub Pages**. Direction visuelle "Clinical Signal" — fond sombre, accents teal, signal ECG en motif.

## Stack

- HTML statique + React (via CDN, transpilé en navigateur par Babel standalone)
- Aucune build step requise
- Compatible 100 % GitHub Pages (statique pur)

## Structure

```
.
├── index.html                       # Page principale
├── variations/
│   └── v2-clinical-signal.jsx       # Composant React du portfolio
├── assets/
│   └── profile.png                  # Photo de profil (600×600)
└── .github/workflows/pages.yml      # Déploiement automatique
```

## Déploiement sur GitHub Pages

### Option 1 — Branche `main` (le plus simple)

1. Créer un dépôt public sur GitHub, par ex. `fhellebuyck.github.io` (le nom exact donne `https://fhellebuyck.github.io/`).
2. Pousser le contenu :
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio initial"
   git branch -M main
   git remote add origin https://github.com/<vous>/<votre-repo>.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment**
   - **Source** : *Deploy from a branch*
   - **Branch** : `main` / dossier `/ (root)`
4. Attendre 1–2 minutes. L'URL est affichée dans la même page.

> Si le repo s'appelle `fhellebuyck.github.io`, le site sera servi sur `https://fhellebuyck.github.io/`.
> Si c'est un autre nom (ex: `portfolio`), le site sera sur `https://fhellebuyck.github.io/portfolio/`.

### Option 2 — GitHub Actions (workflow inclus)

Le fichier `.github/workflows/pages.yml` est fourni. Pour l'activer :

1. Pousser le code sur `main`.
2. **Settings → Pages → Build and deployment → Source** : *GitHub Actions*.
3. Le workflow se déclenche automatiquement à chaque push sur `main`.

## Personnaliser

- **Photo de profil** : remplacer `assets/profile.png` (format carré recommandé, 600×600 ou plus).
- **Contenu** : éditer `variations/v2-clinical-signal.jsx` — projets, skills, expérience.
- **Couleurs / typographie** : tokens `C` en haut du fichier de variation.

## Notes techniques

- Les scripts React + Babel sont chargés depuis unpkg avec leurs hashes d'intégrité (SRI) — recommandé pour la sécurité.
- Aucune dépendance backend, aucune clé API, aucun build.
- Le mode sombre / clair est local à chaque variation (toggle en haut à droite de chaque maquette).

## Licence

© François Hellebuyck — tous droits réservés sur les contenus (projets, photo, biographie). Code structurel libre de réemploi.
