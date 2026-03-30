require("dotenv").config();
const path = require("path");
const fs = require("fs");
const { cloudinary } = require("../cloudConfig"); // cloudConfig.js in root

const imageFolder = path.join(__dirname, "../public/images/listing");
const folderName = "roamella"; // Cloudinary folder

async function uploadAllImages() {
  try {
    // 1️⃣ Delete all existing images in the folder
    console.log(`Deleting all images in folder '${folderName}'...`);
    const deleteResult = await cloudinary.api.delete_resources_by_prefix(`${folderName}/`);
    console.log("Deleted images:", deleteResult.deleted);

    // 2️⃣ Upload new images
    const files = fs.readdirSync(imageFolder);

    for (let file of files) {
      const filePath = path.join(imageFolder, file);
      const publicId = path.parse(file).name; // remove extension for clean name

      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: folderName,      // folder in Cloudinary
          public_id: publicId,     // clean name
          overwrite: true,         // replace if exists
        });
        console.log(`${file} uploaded → ${result.secure_url}`);
      } catch (err) {
        console.error(`Error uploading ${file}:`, err);
      }
    }
  } catch (err) {
    console.error("Error deleting previous images:", err);
  }
}

uploadAllImages();