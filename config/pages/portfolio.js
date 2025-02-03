import axios from "axios";

const config = {
  title: "Projects 📚",
  subtitle: "A selection of projects I've worked on, during my career as a Software Engineer.",
  getProjects: () => {
    return [{
      title: "DocParser",
      description: "A platform that allows users to upload a Docx file and a JSON object to replace placeholders, then export the result as a PDF/Docx.",
      githubUrl: "",
      projectUrl: "https://doc.jehincastic.dev/",
    }, {
      title: "Canva Clone",
      description: "A canva clone build using Next JS",
      githubUrl: "https://github.com/jehincastic/canva_clone",
      projectUrl: "https://canva-clone-green.vercel.app/",
    }];
  },
};

export default config;
