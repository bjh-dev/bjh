import copySection from "./textSection";

export default {
  name: "sections",
  title: "Sections",
  type: "array",
  description: "Add, edit, and reorder sections",
  of: [
    { type: "textSection" },
    { type: "textWithImageSection" },
    { type: "mainImage" },
    { type: "codeSnippet" }
  ],
};
