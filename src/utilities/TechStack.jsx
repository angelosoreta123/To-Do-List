import { FaJs, FaReact, FaHtml5, FaCss3,} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma, FaGitAlt } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { SiJira } from "react-icons/si";

export const frontEnd = [
  {
    tech: "HTML5",
    icons: <FaHtml5 color="#E34F26" size={50} />,
  },
  {
    tech: "CSS3",
    icons: <FaCss3 color="#1572B6" size={50} />,
  },
  {
    tech: "JavaScript",
    icons: <FaJs color="#F7DF1E" size={50} />,
  },
  {
    tech: "React",
    icons: <FaReact color="#61DAFB" size={50} />,
  },
  {
    tech: "Tailwind",
    icons: <RiTailwindCssFill color="#38B2AC" size={50} />,
  },
];

export const otherTechStack = [
  {
    tech: "Git",
    icons: <FaGitAlt color="#F05032" size={50} />,
  },
  {
    tech: "Figma",
    icons: <FaFigma color="#F24E1E" size={50} />,
  },
  {
    tech: "Notion",
    icons: <RiNotionFill color="#ffffff" size={50} />,
  },
  {
    tech: "Jira",
    icons: <SiJira color="#0052CC" size={50} />, 
  },
];
