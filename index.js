import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

// folder root
imagemin(["./assets/images/*.{jpg,png}"], {
  destination: "./assets/webp/", // folder to save image
  plugins: [imageminWebp({})],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});
