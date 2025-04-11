const sharp = require('sharp');
const cliProgress = require('cli-progress');

const imagePath = process.argv[2];

if (!imagePath) {
    console.error('Veuillez fournir le chemin de l\'image à compresser.');
    process.exit(1);
  }

const outputImageName = 'compressed_image.webp';

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

const quality = 80; //  Qualité  (entre 0 et 100)
compressImage(imagePath, outputImageName, quality);
