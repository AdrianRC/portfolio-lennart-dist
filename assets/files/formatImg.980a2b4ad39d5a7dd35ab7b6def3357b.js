export default function (image) {
  if (typeof image === "string") {
    return image;
  }
  return require("!!assets-loader!~/" + image.path);
}