Image Compression Script with Sharp

This Node.js script uses the Sharp library to compress images to WebP format. It takes the path of an image to compress as input and produces a compressed version of that image in WebP format.
Prerequisites

Make sure you have Node.js installed on your machine before running this script. You can download it from nodejs.org.
Installation

    Clone this repository on your machine:

    sh

git clone https://github.com/your-username/repository-name.git

Navigate to the project directory:

sh

cd repository-name

Install the necessary dependencies:

sh

    npm install

Usage

Run the script by specifying the path to the image you want to compress:

sh

node index.js path/to/your/image.jpg

The script will compress the image with a predefined quality and produce a compressed version in WebP format.
Customizing Compression Quality

You can adjust the compression quality by modifying the quality variable in the script. Quality is defined on a scale of 0 to 100, where 0 is the lowest quality and 100 is the best quality.

javascript

const quality = 80; // Adjust quality as needed (between 0 and 100)

Notes

    Ensure you have the necessary permissions to write to the directory where the image to be compressed is located, in order to create the compressed image.
