import { Person } from "./Person.ts";

export function getImageUrl(person: Person) {
  return "https://i.imgur.com/" + person.imageId + person.imageSize + ".jpg";
}
