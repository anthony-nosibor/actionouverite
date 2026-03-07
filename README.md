# Action Vérité - App mobile lettre de voiture

Prototype d'application **React Native (Expo)** pour une SARL de transport léger spécialisée dans la livraison de médicaments à domicile.

## Fonctionnalités incluses
- Création d'une lettre de voiture (patient, adresse, médicament, date, notes).
- Liste des courses enregistrées.
- Synchronisation temps réel avec **Firebase Firestore**.

## Prérequis
- Node.js 18+
- npm
- Un projet Firebase avec Firestore activé

## Installation
```bash
npm install
cp .env.example .env
```

Renseignez les variables Firebase dans `.env`.

## Lancer l'application
```bash
npm run start
```

Puis scannez le QR code avec Expo Go, ou lancez:
```bash
npm run android
npm run ios
npm run web
```

## Structure
- `App.tsx`: écran principal.
- `src/components/WaybillForm.tsx`: formulaire de création.
- `src/components/WaybillList.tsx`: affichage des livraisons.
- `src/services/waybillService.ts`: CRUD Firestore (création + abonnement realtime).
- `src/firebase/config.ts`: initialisation Firebase.

## Étapes suivantes recommandées
- Ajouter l'authentification (chauffeur / dispatcheur).
- Ajouter un statut modifiable (`à faire`, `en cours`, `livrée`).
- Ajouter signature du destinataire et preuve de livraison.
- Chiffrer les données sensibles et gérer les règles de sécurité Firestore.
