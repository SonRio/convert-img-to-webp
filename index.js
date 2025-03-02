import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

export const converImage = (pathSrc, pathSave) => {
  // folder root
  imagemin([pathSrc], {
    destination: pathSave, // folder to save image
    plugins: [imageminWebp({})],
  }).then(() => {
    console.log("Images Converted Successfully!!!");
  });
};
