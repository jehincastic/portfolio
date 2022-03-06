import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
  {
    title: "Github",
    Icon: FaGithub,
    href: "https://github.com/jehincastic/",
  },
  {
    title: "LinkedIn",
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/jehincastic/",
  },
];

const SocialIcons = () => (
  <div className="flex flex-row text-2xl my-6 text-gray-500 dark:text-gray-300">
    {links.map(({ Icon, href, title }, i) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`hover:text-gray-800 dark:hover:text-white transition-colors ${
          i < links.length - 1 ? "mr-3" : ""
        }`}
      >
        <Icon title={title} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
