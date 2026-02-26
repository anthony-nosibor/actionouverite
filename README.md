# Lettre de voiture (Expo + Firebase)

Application mobile React Native (Expo) pour gérer des lettres de voiture dans le cadre de livraisons de médicaments à domicile.

## Fonctionnalités incluses

- Authentification Firebase anonyme (chauffeur)
- Création d'une lettre de voiture
- Sauvegarde en Firestore
- Liste en temps réel des courses à traiter

## 1) Installation

```bash
npm install
```

## 2) Configuration Firebase

1. Créez un projet Firebase.
2. Activez :
   - **Authentication** > méthode **Anonyme**
   - **Firestore Database**
3. Copiez `.env.example` vers `.env` puis renseignez les clés :

```bash
cp .env.example .env
```

## 3) Lancer l'application

```bash
npm run start
```

Puis ouvrez l'application via Expo Go, simulateur iOS/Android, ou navigateur web.

## Structure

- `App.js` : UI principale et logique métier
- `src/firebase.js` : initialisation Firebase

## Prochaine étape recommandée

- Ajouter des rôles (admin / chauffeur)
- Ajouter signature du destinataire
- Ajouter génération PDF de lettre de voiture
- Durcir les règles Firestore (sécurité & conformité)
