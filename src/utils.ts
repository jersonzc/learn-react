import { Person } from "./Person.ts";

export function getImageUrl({ imageId, imageSize = "s" }: Person) {
  return "https://i.imgur.com/" + imageId + imageSize + ".jpg";
}
