import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Section from "../components/Section";

const title = "Hello, I'm Castic 👋";
const subtitle = "I'm a software developer at Crayon'd, and living in Nagercoil, India.";

const IndexPage = () => {
  return (
    <Layout
      title="Home"
      description={`${title} - ${subtitle}`}
      divClass="bg-gray-100 dark:bg-gray-900 pb-14 mb-14"
    >
      <PageTitle title={title} subtitle={subtitle} />

      <Section>
        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">About</h2>
        <p className="my-2">
          I like to spend most of my time as a backend developer.
          My go to tool for backend developement is Node JS.
          Sometimes I also work using React.js.
          I&apos;m currently experimenting with Docker and Kubernetes.
          I&apos;m also plannig to learn about serverless technologies on AWS.
        </p>
      </Section>
    </Layout>
  );
};

export default IndexPage;
