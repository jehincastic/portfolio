import axios from "axios";

const config = {
  title: "Projects 📚",
  subtitle: "A selection of projects I've worked on, during my career as a Software Engineer.",
  getProjects: () => {
    return [{
      title: "DocParser",
      description: "description",
      githubUrl: "",
      projectUrl: "https://doc.jehincastic.dev/",
    }];
  },
};

export default config;
