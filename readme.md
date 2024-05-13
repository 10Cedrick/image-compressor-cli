# Script de Compression d'Image avec Sharp

Ce script Node.js utilise la bibliothèque Sharp pour compresser des images au format WebP. Il prend en entrée le chemin d'une image à compresser et produit une version compressée de cette image au format WebP.

## Prérequis

Assurez-vous d'avoir Node.js installé sur votre machine avant d'exécuter ce script. Vous pouvez le télécharger depuis [nodejs.org](https://nodejs.org/).

## Installation

1. Clonez ce dépôt sur votre machine :
   ```sh
   git clone https://github.com/votre-utilisateur/nom-du-depot.git
   ```

2. Accédez au répertoire du projet :
   ```sh
   cd nom-du-depot
   ```

3. Installez les dépendances nécessaires :
   ```sh
   npm install
   ```

## Utilisation

Exécutez le script en spécifiant le chemin de l'image que vous souhaitez compresser :
```sh
node compress.js chemin/vers/votre/image.jpg
```

Assurez-vous de remplacer `compress.js` par le nom de votre fichier si nécessaire.

Le script compressera l'image avec une qualité prédéfinie et produira une version compressée au format WebP.

## Personnalisation de la Qualité de Compression

Vous pouvez ajuster la qualité de compression en modifiant la variable `quality` dans le script. La qualité est définie sur une échelle de 0 à 100, où 0 est la qualité la plus basse et 100 est la meilleure qualité.

```javascript
const quality = 80; // Ajustez la qualité selon vos besoins (entre 0 et 100)
```

## Notes

- Assurez-vous d'avoir les droits nécessaires pour écrire dans le répertoire où se trouve l'image à compresser, afin de pouvoir créer l'image compressée.
- Le script générera une image compressée au format WebP avec le nom `compressed_image.webp` dans le même répertoire que l'image originale.

---

Vous pouvez personnaliser ce `README.md` en ajoutant des informations supplémentaires sur le script ou en fournissant des exemples d'utilisation avancée si nécessaire. Si vous avez d'autres questions ou besoin d'aide pour quelque chose de spécifique, n'hésitez pas à demander !