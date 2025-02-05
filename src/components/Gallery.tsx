import Profile from "./Profile.tsx";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          id: 1,
          name: "Maria Skłodowska-Curie",
          profession: "physicist and chemist",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
          discover: "polonium (chemical element)",
          imageId: "szV5sdG",
        }}
      />
      <Profile
        person={{
          id: 2,
          name: "Katsuko Saruhashi",
          profession: "geochemist",
          awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
          discover: "a method for measuring carbon dioxide in seawater",
          imageId: "YfeOqp2",
        }}
      />
    </div>
  );
}
