import { FaNodeJs, FaSchool } from "react-icons/fa";
import { IoLogoJavascript, IoMdSchool } from "react-icons/io";

import Link from "../../components/Link";

const config = {
  title: "Timeline ⌛",
  subtitle: "The timeline of my life.",
  timelineData: [{
    year: `Apr 2022`,
    icon: IoLogoJavascript,
    data: {
      title: (
        <div className="text-md font-bold text-gray-500 lex dark:text-gray-300">
          Joined <Link href="https://crayond.com">
            <a className="text-orange-400 dark:text-yellow-300 italic">
              SenseHawk
            </a>
          </Link> as Software Engineer.
        </div>
      ),
      description: `Joined SenseHawk as a Software Engineer.`,
    },
  }, {
    year: `May 2021`,
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
    year: `Feb 2019`,
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
        Worked on a building a no-code platform.`,
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
  }],
};

export default config;
