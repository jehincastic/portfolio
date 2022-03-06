import React from "react";
import { FaNodeJs, FaSchool } from "react-icons/fa";
import { IoLogoJavascript, IoMdSchool } from "react-icons/io";

import Layout from "../components/Layout";
import Link from "../components/Link";
import PageTitle from "../components/PageTitle";
import Timeline from "../components/timeline";

const title = "Timeline ⌛";
const subtitle = "The timeline of my life.";

const timelineData = [{
  year: 2021,
  icon: IoLogoJavascript,
  data: {
    title: (
      <div className="text-md font-bold text-gray-500 lex dark:text-gray-300">
        Joined <Link href="https://crayond.com">
          <a className="text-orange-400 dark:text-yellow-300 italic">
            Crayon&apos;d
          </a>
        </Link> as Full-Stack Developer.
      </div>
    ),
    description: `Joined Crayon'd as a Full-Stack Developer.
      Worked primarily on a telehealth platform for medical professionals.
      Worked closely with the client to design and develop the platform.`,
  },
}, {
  year: 2019,
  icon: FaNodeJs,
  data: {
    title: (
      <div className="text-md font-bold text-gray-500 lex dark:text-gray-300">
        Landed My First Job at <Link href="https://www.chainsys.com/">
          <a className="text-orange-400 dark:text-yellow-300 italic">
            Chain-Sys
          </a>
        </Link> as NodeJS Developer.
      </div>
    ),
    description: `Landed my first job at Chainsys as a NodeJS developer soon after my graduation.
      Worked on a no-code platform.`,
  },
}, {
  year: 2019,
  icon: IoMdSchool,
  data: {
    title: (
      <div className="text-md font-bold text-gray-500 lex dark:text-gray-300">
        Graduated <Link href="http://kamarajengg.edu.in/">
          <a className="text-orange-400 dark:text-yellow-300 italic">
            College
          </a>
        </Link>
      </div>
    ),
    description: "Graduated College with a Degree in Mechanical Engineering."
  }
}, {
  year: 2015,
  icon: FaSchool,
  data: {
    title: (
      <div className="text-md font-bold text-gray-500 lex dark:text-gray-300">
        Graduated High School.
      </div>
    ),
    description: "Graduated High School."
  }
}];

const TimelinePage = () => {
  return (
    <Layout
      title="Timeline"
      description={`${title} - ${subtitle}`}
      divClass="bg-gray-100 dark:bg-gray-900 pb-14 mb-14"
    >
      <PageTitle
        icons={false}
        title={title}
        marginTop="mt-12 lg:mt-12"
      />
      <ol className="relative border-l mt-20 border-gray-200 dark:border-gray-700">
        {
          timelineData.map((item, index) => (
            <Timeline
              key={index}
              data={item.data}
              icon={item.icon}
              year={item.year}
            />
          ))
        }
      </ol>
    </Layout>
  );
};

export default TimelinePage;
