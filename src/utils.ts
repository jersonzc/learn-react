import { Person } from "./Person.ts";

export function getImageUrl({ imageId }: Person, imageSize: string = "s") {
  return "https://i.imgur.com/" + imageId + imageSize + ".jpg";
}
