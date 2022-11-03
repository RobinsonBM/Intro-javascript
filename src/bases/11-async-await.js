// const getImagePromesa = () => {
//   const promesa = new Promise((resolve, reject) => {
//     resolve("htpps://asdkfjaslfk.com");
//   });
//   return promesa;
// };

// getImagePromesa().then(console.log);

const getImage = async () => {
  try {
    const apiKey = "mMqIWWIhQ67GgcZPwaQYwX5sHlNARdeF";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
