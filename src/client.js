import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
export default sanityClient({
  projectId: "xetzbj9a", // find this at manage.sanity.io or in your sanity.json

  dataset: "production", // this is from those question during 'sanity init'
});
export const urlFor = (source) =>
  createImageUrlBuilder({
    projectId: "xetzbj9a",

    dataset: "production",
  }).image(source);
