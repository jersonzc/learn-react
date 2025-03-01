import { Story } from "../../App.tsx";

interface StoryTrayProps {
  stories: Story[]
}

export default function StoryTray({ stories }: StoryTrayProps) {
  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}
