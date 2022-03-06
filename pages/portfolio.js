import React from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";

const title = "Projects 📚";
const subtitle =
  "A selection of projects I've worked on, during my career as a software developer.";

const PortfolioPage = ({
  projects = [],
}) => {
  return (
    <Layout
      title={title}
      description={subtitle}
      divClass="bg-gray-100 dark:bg-gray-900 pb-14 mb-14"
    >
      <PageTitle
        title={title}
        subtitle={subtitle}
        icons={false}
        marginTop="mt-12 lg:mt-12"
      />
      <Section>
        {projects.map(({ title, description, projectUrl, githubUrl }, idx) => (
          <Card
            key={idx}
            title={title}
            description={description}
            projectUrl={projectUrl}
            githubUrl={githubUrl}
          />
        ))}
      </Section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const repos = await axios.get("https://api.github.com/users/jehincastic/repos?sort=pushed");
  const projectData = repos.data;
  const projects = [];
  projectData?.forEach(({
    name,
    description,
    homepage,
    html_url,
    fork,
  }) => {
    if ((!fork) && description) {
      const obj = {
        title: name,
        description: description,
        githubUrl: html_url,
        projectUrl: homepage || "",
      };
      projects.push(obj);
    }
  });
  return {
    props: {
      projects,
    },
  }
};

export default PortfolioPage;
