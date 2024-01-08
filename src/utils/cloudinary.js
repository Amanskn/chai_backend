import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // ======== upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log(
      "File has been uploaded on cloudinary and the url is : ",
      response.url
    );
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("Error in cloudinary.js @@", error.message);
    process.exit(1);
  }
};

export { uploadOnCloudinary };
