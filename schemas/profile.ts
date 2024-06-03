// schemas/profile.ts

import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(80),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: {
        hotspot: true,
        metadata: ["lqip"], // "blurhash", "palette", etc
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fullBio",
      title: "Full Bio",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "usage",
      title: "Skills",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
  ],
};

export default profile;

// Hello there! I'm Preshma Linet Pereira, a fervent enthusiast of the ever-evolving world of technology and data science. My fascination lies in the intricate dance of numbers and algorithms, and the magic they create when perfectly orchestrated. At the heart of my interests is the power of machine learning and artificial intelligence to transform the ordinary into the extraordinary, to find patterns hidden in plain sight, and to make sense of the vast sea of data that surrounds us.

// I find joy in the challenge of pattern recognition, the elegance of neural networks, and the potential of technologies like YOLO and Transformers to reshape our future. The beauty of a well-crafted code or a successfully executed model is not just in its complexity, but in its ability to simplify, to predict, and to enhance. Whether it's through the lens of a camera interpreting the world or a language model understanding human nuances, I am deeply passionate about pushing the boundaries of what's possible.

// Beyond the screen, my love for innovation extends to the field—quite literally. As an avid soccer player, I see a parallel between the strategies on the pitch and the strategies in programming. Both require foresight, adaptability, and a team-oriented mindset. This perspective fuels my approach to technology, where every problem is a game to be played with creativity and determination.

// I'm driven by the belief that technology is a tool for positive change, a means to build bridges and break down barriers. It's this belief that propels me to dive into complex projects, to learn relentlessly, and to contribute to a community that's larger than myself. I thrive on collaboration, cherish the process of discovery, and am always on the lookout for the next puzzle to solve.

// In the digital symphony of bits and bytes, I find my rhythm, and in the pursuit of technological excellence, I find my purpose. Let's connect and create something impactful together.