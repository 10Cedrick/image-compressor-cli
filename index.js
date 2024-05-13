const sharp = require('sharp');
const cliProgress = require('cli-progress');
// Récupérer le chemin de l'image à compresser depuis les arguments de la ligne de commande
const imagePath = process.argv[2];


// Vérifier si le chemin de l'image est fourni
if (!imagePath) {
    console.error('Veuillez fournir le chemin de l\'image à compresser.');
    process.exit(1);
  }

// Définir le chemin de sortie pour l'image compressée
const outputImageName = 'compressed_image.webp';
// Fonction pour compresser une image avec Sharp


async function compressImage(inputPath, outputPath, quality) {
  const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  console.log("Conversion de l'image: " + imagePath + "..."); 
  progressBar.start(100, 0);
  try {
    await sharp(inputPath)
      .webp({ quality: quality })
      .toFile(outputPath);
    progressBar.stop();
    console.log(`L'image a été compressée avec succès. Image compressée : ${outputPath}`);
  } catch (error) {
    console.error('Erreur lors de la compression de l\'image :', error.message);
  }
}

// Appeler la fonction pour compresser l'image
const quality = 80; // Ajustez la qualité selon vos besoins (entre 0 et 100)
compressImage(imagePath, outputImageName, quality);